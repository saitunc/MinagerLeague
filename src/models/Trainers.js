"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = exports.invokeTraining = void 0;
var utils_1 = require("../utils/stats/utils");
function invokeTraining(player, training_type) {
    var newGoalkeeping = {
        mental: player.mental_getter,
        physical: player.physical_getter,
        technical: player.technical_getter,
        goalkeeping: player.goalkeeping_getter
    };
    var choice_index = Object.keys(newGoalkeeping);
    console.log(choice_index);
    if (training_type === 'mental') {
        Object.values(newGoalkeeping.mental).forEach(function (e) {
            e = Math.min(((0, utils_1.gaussianRandom)(3, 1.5, true) + e), 100);
        });
    }
    player.setCombined(newGoalkeeping);
    return (player);
}
exports.invokeTraining = invokeTraining;
var Trainer = /** @class */ (function () {
    function Trainer(name, profession) {
        this.name = name;
        this.profession = profession;
    }
    Trainer.prototype.train_player = function (player) {
    };
    return Trainer;
}());
exports.Trainer = Trainer;
