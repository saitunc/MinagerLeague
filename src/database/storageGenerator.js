"use strict";
exports.__esModule = true;
var Team_1 = require("../models/Team");
var o1js_1 = require("o1js");
var mockTeam = new Team_1.Team("Fenerbahce", o1js_1.UInt64.from(1000));
mockTeam.generateTeam();
console.log(mockTeam.teamPlayersInfo());
