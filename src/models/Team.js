"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var generators_1 = require("../utils/generators");
var Team = /** @class */ (function () {
    function Team(teamName, money) {
        if (money === void 0) { money = 1000; }
        this.teamName = teamName;
        this.players = [];
        this.money = money;
        this.positionPairs = [];
    }
    Team.prototype.addPlayer = function (player) {
        this.players.push(player); // Add player to the team
    };
    Team.prototype.generateTeam = function () {
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("goalkeeper"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("defense", "left"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("defense", "mid"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("defense", "right"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("midfielder", "right"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("midfielder", "left"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("midfielder", "mid"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("attack", "right"));
        }
        for (var i = 0; i < 2; i++) {
            this.addPlayer((0, generators_1.generatePlayer)("attack", "right"));
        }
        for (var i_1 = 0; i_1 < 2; i_1++) {
            this.addPlayer((0, generators_1.generatePlayer)("attack", "right"));
        }
    };
    Team.prototype.positioning = function (x, y, player) {
        var vertical = ["goalkeeper", "defense", "midfielder", "attack"];
        var technicalSum = Object.values(player.technical_getter).reduce(function (acc, value) { return acc + value; }, 0);
        var technicallen = Object.keys(player.technical_getter).length;
        var goalkeepingSum = Object.values(player.goalkeeping_getter).reduce(function (acc, value) { return acc + value; }, 0);
        var goalkeepinglen = Object.keys(player.goalkeeping_getter).length;
        var phsicalSum = Object.values(player.physical_getter).reduce(function (acc, value) { return acc + value; }, 0);
        var physicallen = Object.keys(player.physical_getter).length;
        var mentalSum = Object.values(player.mental_getter).reduce(function (acc, value) { return acc + value; }, 0);
        var mentallen = Object.keys(player.mental_getter).length;
        var mean_stat = (technicalSum + goalkeepingSum + phsicalSum + mentalSum) / (technicallen + goalkeepinglen + physicallen + mentallen);
        if (((x < 70) && (x > 0)) && ((y < 70) && (y > 0))) {
            if (((x < 20) && (x > 0)) && ((y < 10) && (y > 0)) || ((x < 70) && (x > 50)) && ((y < 10) && (y > 0))) {
                console.log("can not put your player here");
            }
            else if (((x < 50) && (x > 20)) && ((y < 10) && (y > 0))) {
                var index_ver = vertical.findIndex(function (item) { return item === player.personal_getter.Position; });
                var point = mean_stat * (1 - 0.2 * Math.abs(0 - index_ver));
            }
        }
        else
            console.log("Error");
    };
    return Team;
}());
exports.Team = Team;
