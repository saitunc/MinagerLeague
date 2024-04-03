"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team_1 = require("./models/Team");
var takim = new Team_1.Team("team1");
takim.generateTeam();
console.log(takim.players[1].personal_getter);
