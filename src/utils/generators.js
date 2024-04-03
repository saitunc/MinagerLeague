"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePlayer = void 0;
var utils_1 = require("./stats/utils");
var Player_1 = require("../models/Player");
var player_test_1 = require("../models/player_test");
function generatePlayer(place, side) {
    if (side === void 0) { side = "mid"; }
    var newPlayer = new Player_1.Player();
    var attributes = {
        mental: newPlayer.mental_getter,
        physical: newPlayer.physical_getter,
        technical: newPlayer.technical_getter,
        goalkeeping: newPlayer.goalkeeping_getter
    };
    switch (place) {
        case "goalkeeper":
            attributes.goalkeeping.Focus = Math.min((0, utils_1.gaussianRandom)(70, 5, true), 100);
            attributes.goalkeeping.Reflex = Math.min((0, utils_1.gaussianRandom)(75, 5, true), 100);
            attributes.goalkeeping.Handling = Math.min((0, utils_1.gaussianRandom)(75, 4, true), 100);
            attributes.goalkeeping.Kicking = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.goalkeeping.one_on_one = Math.min((0, utils_1.gaussianRandom)(75, 5, true), 100);
            attributes.technical.Corner = Math.min((0, utils_1.gaussianRandom)(10, 4, true), 100);
            attributes.technical.Dribbling = Math.min((0, utils_1.gaussianRandom)(15, 4, true), 100);
            attributes.technical.Passing = Math.min((0, utils_1.gaussianRandom)(20, 4, true), 100);
            attributes.technical.Finishing = Math.min((0, utils_1.gaussianRandom)(10, 4, true), 100);
            attributes.technical.Ball_control = Math.min((0, utils_1.gaussianRandom)(20, 4, true), 100);
            attributes.technical.Free_kick = Math.min((0, utils_1.gaussianRandom)(15, 4, true), 100);
            attributes.technical.Tackling = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.physical.Speed = Math.min((0, utils_1.gaussianRandom)(30, 4, true), 100);
            attributes.physical.Agility = Math.min((0, utils_1.gaussianRandom)(35, 4, true), 100);
            attributes.physical.Endurance = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.physical.Strength = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.mental.Aggression = Math.min((0, utils_1.gaussianRandom)(40, 4, true), 100);
            attributes.mental.Bravery = Math.min((0, utils_1.gaussianRandom)(45, 4, true), 100);
            attributes.mental.Intelligence = Math.min((0, utils_1.gaussianRandom)(50, 4, true), 100);
            attributes.mental.Leadership = Math.min((0, utils_1.gaussianRandom)(50, 4, true), 100);
            break;
        case "defense":
            attributes.goalkeeping.Focus = Math.min((0, utils_1.gaussianRandom)(40, 5, true), 100);
            attributes.goalkeeping.Reflex = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.goalkeeping.Handling = Math.min((0, utils_1.gaussianRandom)(35, 4, true), 100);
            attributes.goalkeeping.Kicking = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.goalkeeping.one_on_one = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.technical.Corner = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.technical.Dribbling = Math.min((0, utils_1.gaussianRandom)(20, 4, true), 100);
            attributes.technical.Passing = Math.min((0, utils_1.gaussianRandom)(35, 5, true), 100);
            attributes.technical.Finishing = Math.min((0, utils_1.gaussianRandom)(25, 4, true), 100);
            attributes.technical.Ball_control = Math.min((0, utils_1.gaussianRandom)(30, 4, true), 100);
            attributes.technical.Free_kick = Math.min((0, utils_1.gaussianRandom)(60, 4, true), 100);
            attributes.technical.Tackling = Math.min((0, utils_1.gaussianRandom)(70, 5, true), 100);
            attributes.physical.Speed = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.physical.Agility = Math.min((0, utils_1.gaussianRandom)(40, 5, true), 100);
            attributes.physical.Endurance = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.physical.Strength = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.mental.Aggression = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.mental.Bravery = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.mental.Intelligence = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.mental.Leadership = Math.min((0, utils_1.gaussianRandom)(40, 4, true), 100);
            break;
        case "midfielder":
            attributes.goalkeeping.Focus = Math.min((0, utils_1.gaussianRandom)(35, 5, true), 100);
            attributes.goalkeeping.Reflex = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.goalkeeping.Handling = Math.min((0, utils_1.gaussianRandom)(25, 4, true), 100);
            attributes.goalkeeping.Kicking = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.goalkeeping.one_on_one = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.technical.Corner = Math.min((0, utils_1.gaussianRandom)(40, 5, true), 100);
            attributes.technical.Dribbling = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.technical.Passing = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.technical.Finishing = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.technical.Ball_control = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.technical.Free_kick = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.technical.Tackling = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.physical.Speed = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.physical.Agility = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.physical.Endurance = Math.min((0, utils_1.gaussianRandom)(65, 5, true), 100);
            attributes.physical.Strength = Math.min((0, utils_1.gaussianRandom)(45, 5, true), 100);
            attributes.mental.Aggression = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.mental.Bravery = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.mental.Intelligence = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.mental.Leadership = Math.min((0, utils_1.gaussianRandom)(50, 4, true), 100);
            break;
        case "attack":
            attributes.goalkeeping.Focus = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.goalkeeping.Reflex = Math.min((0, utils_1.gaussianRandom)(35, 5, true), 100);
            attributes.goalkeeping.Handling = Math.min((0, utils_1.gaussianRandom)(25, 4, true), 100);
            attributes.goalkeeping.Kicking = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.goalkeeping.one_on_one = Math.min((0, utils_1.gaussianRandom)(35, 5, true), 100);
            attributes.technical.Corner = Math.min((0, utils_1.gaussianRandom)(75, 5, true), 100);
            attributes.technical.Dribbling = Math.min((0, utils_1.gaussianRandom)(70, 5, true), 100);
            attributes.technical.Passing = Math.min((0, utils_1.gaussianRandom)(65, 5, true), 100);
            attributes.technical.Finishing = Math.min((0, utils_1.gaussianRandom)(70, 5, true), 100);
            attributes.technical.Ball_control = Math.min((0, utils_1.gaussianRandom)(70, 5, true), 100);
            attributes.technical.Free_kick = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.technical.Tackling = Math.min((0, utils_1.gaussianRandom)(30, 5, true), 100);
            attributes.physical.Speed = Math.min((0, utils_1.gaussianRandom)(65, 5, true), 100);
            attributes.physical.Agility = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.physical.Endurance = Math.min((0, utils_1.gaussianRandom)(55, 5, true), 100);
            attributes.physical.Strength = Math.min((0, utils_1.gaussianRandom)(40, 5, true), 100);
            attributes.mental.Aggression = Math.min((0, utils_1.gaussianRandom)(60, 5, true), 100);
            attributes.mental.Bravery = Math.min((0, utils_1.gaussianRandom)(65, 5, true), 100);
            attributes.mental.Intelligence = Math.min((0, utils_1.gaussianRandom)(50, 5, true), 100);
            attributes.mental.Leadership = Math.min((0, utils_1.gaussianRandom)(40, 5, true), 100);
            break;
    }
    newPlayer.setCombined(attributes);
    newPlayer.personal_setter = {
        Name: player_test_1.footballPlayerNames[Math.floor(Math.random() * player_test_1.footballPlayerNames.length)],
        Age: Math.round(Math.max((0, utils_1.gaussianRandom)(27, 5, false), 17)),
        Position: place,
        Side: side
    };
    return (newPlayer);
}
exports.generatePlayer = generatePlayer;
