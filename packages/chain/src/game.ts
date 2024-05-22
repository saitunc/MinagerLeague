import { RuntimeModule,runtimeMethod, runtimeModule, state } from "@proto-kit/module";
import { State, StateMap, assert } from "@proto-kit/protocol";
import { PublicKey, UInt64, Struct,Field, Encoding, Poseidon,Bool } from "o1js";

export class ProvablePlayer extends Struct({
    // names simply act as ids.
    name: Field,
    ownerId: Field,
}){}

export class ProvableTeam extends Struct({
    name: Field,
    // Dynamics arrays not allowed, obviously.
    players: [ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer,ProvablePlayer],
}){} 

export class Scores extends Struct({
    Points: UInt64,
    Win: UInt64,
    Loss: UInt64,
    Draw: UInt64,
}){}

@runtimeModule()
export class Game extends RuntimeModule<{}>{
    @state() public teams = StateMap.from<PublicKey,ProvableTeam>(PublicKey,ProvableTeam);
    
    @state() public leagueSize = State.from<UInt64>(UInt64);

    @state() public totalScoreBoard = StateMap.from<PublicKey,Scores>(PublicKey,Scores);

    @state() public teamBalances = StateMap.from<PublicKey,UInt64>(PublicKey,UInt64);   

    @runtimeMethod()
    register(team: ProvableTeam){
        assert(this.teams.get(this.transaction.sender.value).isSome.not(),"You are already in this game!");
        
        this.teams.set(this.transaction.sender.value,team);
    }

    @runtimeMethod()
    initializeLeagueSize(){
        let currentHeight = this.network.block.height;
        assert(currentHeight.lessThan(UInt64.from(1)), "Initizalized league size can not be changed. You can update by registering");
        this.leagueSize.set(UInt64.from(0));
    }
    
    @runtimeMethod()
    updateWin(winningKey: PublicKey, losingKey: PublicKey){
        assert(this.teams.get(this.transaction.sender.value).isSome.not(),"Only server's account can make updates.");

        let winningTeamScores = this.totalScoreBoard.get(winningKey).value;
        let losingTeamScores = this.totalScoreBoard.get(losingKey).value;

        winningTeamScores.Points.add(3);
        winningTeamScores.Win.add(1);

        losingTeamScores.Loss.add(1);

        this.totalScoreBoard.set(winningKey,winningTeamScores);
        this.totalScoreBoard.set(losingKey,losingTeamScores);
    }

    @runtimeMethod()
    updateDraw(winningKey: PublicKey, losingKey: PublicKey){
        assert(this.teams.get(this.transaction.sender.value).isSome.not(),"Only server's account can make updates.");
        
        let winningTeamScores = this.totalScoreBoard.get(winningKey).value;
        let losingTeamScores = this.totalScoreBoard.get(losingKey).value;

        winningTeamScores.Points.add(1);
        winningTeamScores.Draw.add(1);

        losingTeamScores.Points.add(1);
        losingTeamScores.Draw.add(1); 
        
        this.totalScoreBoard.set(winningKey,winningTeamScores);
        this.totalScoreBoard.set(losingKey,losingTeamScores);
    }

}