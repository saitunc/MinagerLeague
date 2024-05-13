import { RuntimeModule, runtimeMethod, runtimeModule,state } from "@proto-kit/module";
import { StateMap, assert } from "@proto-kit/protocol";
import { PublicKey,Field, Struct } from "o1js";
import { inject } from "tsyringe";
import { CircuitString } from "o1js";
import { Random } from "./randomness";
import { UInt64 } from "@proto-kit/library";


interface GameConfig{
    gameId: UInt64;
}

@runtimeModule()
export class Game extends RuntimeModule<GameConfig>{
    @state() public players = StateMap.from<PublicKey,CircuitString>(
        PublicKey,
        CircuitString,
    );

    @state() public leagueSize = Field.from(0);

    constructor(@inject("Random") public random: Random){
        super();
    }
    
    @runtimeMethod()
    public register(name:CircuitString){

        assert(this.leagueSize.lessThan(16), "League is full!");
        assert(this.players.get(this.transaction.sender.value)?.isSome, "This player is already registered.");
        this.leagueSize.add(1);

        return name.toString();
    }    

    // Need to return the existence of some player
    @runtimeMethod()
    public isUser(pk : PublicKey){
        assert(this.players.get(pk).isSome);

        return this.players.get(pk).isSome;
    }

    @runtimeMethod()
    public getMatchRecords(pk: PublicKey){
        assert(this.players.get(pk).isSome, "No such player in the league");
    }

}
