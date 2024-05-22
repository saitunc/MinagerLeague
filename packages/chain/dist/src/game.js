var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RuntimeModule, runtimeMethod, runtimeModule, state } from "@proto-kit/module";
import { State, StateMap, assert } from "@proto-kit/protocol";
import { PublicKey, UInt64, Struct, Field, Encoding, Poseidon, Bool } from "o1js";
import { MatchResult } from "../game/utils/matchRecords";
export class ProvablePlayer extends Struct({
    // names simply act as ids.
    name: Field,
    ownerId: Field,
    Personal: {
        isInjured: Bool,
    }
}) {
}
export class ProvableTeam extends Struct({
    name: Field,
    // Dynamics arrays not allowed, obviously.
    players: [ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer, ProvablePlayer],
}) {
    getPlayerByName(name) {
        const encodedName = Poseidon.hash(Encoding.stringToFields(name));
        const index = this.players.findIndex(player => player.name === encodedName);
        return index;
    }
}
export class Scores extends Struct({
    Points: UInt64,
    Win: UInt64,
    Loss: UInt64,
    Draw: UInt64,
}) {
}
let Game = class Game extends RuntimeModule {
    constructor() {
        super(...arguments);
        this.teams = StateMap.from(PublicKey, ProvableTeam);
        this.leagueSize = State.from(UInt64);
        this.totalScoreBoard = StateMap.from(PublicKey, Scores);
        this.teamBalances = StateMap.from(PublicKey, UInt64);
    }
    register(team) {
        assert(this.teams.get(this.transaction.sender.value).isSome.not(), "You are already in this game!");
        this.teams.set(this.transaction.sender.value, team);
    }
    initializeLeagueSize() {
        let currentHeight = this.network.block.height;
        assert(currentHeight.lessThan(UInt64.from(1)), "Initizalized league size can not be changed. You can update by registering");
        this.leagueSize.set(UInt64.from(0));
    }
    updateScores(result) {
        const winningTeam = result.winningKey;
        const losingTeam = result.losingKey;
        let winningTeamScores = this.totalScoreBoard.get(winningTeam).value;
        let losingTeamScores = this.totalScoreBoard.get(losingTeam).value;
        if (result.result === "DRAW") {
            winningTeamScores.Points.add(1);
            winningTeamScores.Draw.add(1);
            losingTeamScores.Points.add(1);
            losingTeamScores.Draw.add(1);
            this.totalScoreBoard.set(winningTeam, winningTeamScores);
            this.totalScoreBoard.set(losingTeam, losingTeamScores);
        }
        else if (result.result === "WIN") {
            winningTeamScores.Points.add(3);
            winningTeamScores.Win.add(1);
            losingTeamScores.Loss.add(1);
            this.totalScoreBoard.set(winningTeam, winningTeamScores);
            this.totalScoreBoard.set(losingTeam, losingTeamScores);
        }
    }
};
__decorate([
    state(),
    __metadata("design:type", Object)
], Game.prototype, "teams", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Game.prototype, "leagueSize", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Game.prototype, "totalScoreBoard", void 0);
__decorate([
    state(),
    __metadata("design:type", Object)
], Game.prototype, "teamBalances", void 0);
__decorate([
    runtimeMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProvableTeam]),
    __metadata("design:returntype", void 0)
], Game.prototype, "register", null);
__decorate([
    runtimeMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Game.prototype, "initializeLeagueSize", null);
__decorate([
    runtimeMethod(),
    runtimeMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MatchResult]),
    __metadata("design:returntype", void 0)
], Game.prototype, "updateScores", null);
Game = __decorate([
    runtimeModule()
], Game);
export { Game };
