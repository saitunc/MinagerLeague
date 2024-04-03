"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(Focus, Reflex, Handling, Kicking, one_on_one, Name, Age, Position, Side, Goals, Passes, Assists, Matches_played, isInjured, Yellow_Card, Red_Card, isTraining, Motivation, Fitness, Stamina, Corner, Dribbling, Passing, Finishing, Ball_control, Free_kick, Tackling, Speed, Agility, Endurance, Strength, Aggression, Bravery, Intelligence, Leadership) {
        if (Focus === void 0) { Focus = 1; }
        if (Reflex === void 0) { Reflex = 1; }
        if (Handling === void 0) { Handling = 1; }
        if (Kicking === void 0) { Kicking = 1; }
        if (one_on_one === void 0) { one_on_one = 1; }
        if (Name === void 0) { Name = "Joe"; }
        if (Age === void 0) { Age = 1; }
        if (Position === void 0) { Position = "defense"; }
        if (Side === void 0) { Side = "right"; }
        if (Goals === void 0) { Goals = 0; }
        if (Passes === void 0) { Passes = 0; }
        if (Assists === void 0) { Assists = 0; }
        if (Matches_played === void 0) { Matches_played = 0; }
        if (isInjured === void 0) { isInjured = false; }
        if (Yellow_Card === void 0) { Yellow_Card = 0; }
        if (Red_Card === void 0) { Red_Card = false; }
        if (isTraining === void 0) { isTraining = false; }
        if (Motivation === void 0) { Motivation = 1; }
        if (Fitness === void 0) { Fitness = 1; }
        if (Stamina === void 0) { Stamina = 1; }
        if (Corner === void 0) { Corner = 1; }
        if (Dribbling === void 0) { Dribbling = 1; }
        if (Passing === void 0) { Passing = 1; }
        if (Finishing === void 0) { Finishing = 1; }
        if (Ball_control === void 0) { Ball_control = 1; }
        if (Free_kick === void 0) { Free_kick = 1; }
        if (Tackling === void 0) { Tackling = 1; }
        if (Speed === void 0) { Speed = 1; }
        if (Agility === void 0) { Agility = 1; }
        if (Endurance === void 0) { Endurance = 1; }
        if (Strength === void 0) { Strength = 1; }
        if (Aggression === void 0) { Aggression = 1; }
        if (Bravery === void 0) { Bravery = 1; }
        if (Intelligence === void 0) { Intelligence = 1; }
        if (Leadership === void 0) { Leadership = 1; }
        this.goalkeeping = {
            Focus: Focus,
            Reflex: Reflex,
            Handling: Handling,
            Kicking: Kicking,
            one_on_one: one_on_one
        };
        this.personal = {
            Name: Name,
            Age: Age,
            Position: Position,
            Side: Side
        };
        this.history = {
            Goals: Goals,
            Passes: Passes,
            Assists: Assists,
            Matches_played: Matches_played
        };
        this.current_condition = {
            isInjured: isInjured,
            Yellow_Card: Yellow_Card,
            Red_Card: Red_Card,
            isTraining: isTraining,
            Motivation: Motivation,
            Fitness: Fitness,
            Stamina: Stamina
        };
        this.technical = {
            Corner: Corner,
            Dribbling: Dribbling,
            Passing: Passing,
            Finishing: Finishing,
            Ball_control: Ball_control,
            Free_kick: Free_kick,
            Tackling: Tackling
        };
        this.physical = {
            Speed: Speed,
            Agility: Agility,
            Endurance: Endurance,
            Strength: Strength
        };
        this.mental = {
            Aggression: Aggression,
            Bravery: Bravery,
            Intelligence: Intelligence,
            Leadership: Leadership
        };
    }
    Object.defineProperty(Player.prototype, "goalkeeping_getter", {
        //goalkeeping getter - setter
        get: function () {
            return (this.goalkeeping);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "goalkeeping_setter", {
        set: function (new_goalkeeping) {
            this.goalkeeping = new_goalkeeping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "personal_setter", {
        //personal setter- getter
        set: function (new_personal) {
            this.personal = new_personal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "personal_getter", {
        get: function () {
            return this.personal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "history_setter", {
        //history setter- getter
        set: function (new_history) {
            this.history = new_history;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "history_getter", {
        get: function () {
            return this.history;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "current_condition_setter", {
        //current_condition setter- getter
        set: function (new_current_condition) {
            this.current_condition = new_current_condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "current_condition_getter", {
        get: function () {
            return this.current_condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "technical_setter", {
        //technical setter- getter
        set: function (new_technical) {
            this.technical = new_technical;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "technical_getter", {
        get: function () {
            return this.technical;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "mental_setter", {
        //mental setter- getter
        set: function (new_mental) {
            this.mental = new_mental;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "mental_getter", {
        get: function () {
            return this.mental;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "physical_setter", {
        //physical setter- getter
        set: function (new_physical) {
            this.physical = new_physical;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "physical_getter", {
        get: function () {
            return this.physical;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.setCombined = function (newData) {
        if (newData.mental) {
            this.mental = newData.mental;
        }
        if (newData.physical) {
            this.physical = newData.physical;
        }
        if (newData.technical) {
            this.technical = newData.technical;
        }
        if (newData.goalkeeping) {
            this.goalkeeping = newData.goalkeeping;
        }
    };
    return Player;
}());
exports.Player = Player;
