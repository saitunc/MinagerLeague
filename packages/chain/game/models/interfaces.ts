import {Player} from './Player.js';
import { Bool, UInt64, Field, Struct } from 'o1js';
//grouped properties by using interface


export interface afterPositioning {
    x_axsis: UInt64;
    y_axsis: UInt64;
    selectedPlayer: Player,
    point: UInt64,
};

export interface goalkeeping {
    Focus: UInt64,
    Reflex: UInt64,
    Handling: UInt64,
    Kicking: UInt64,
    one_on_one: UInt64
};

export interface personal{
    Name: string,
    Age: UInt64,
    Position: string,
    Side: string,
};

export interface history {
    Goals: UInt64,
    Passes: UInt64,
    Assists: UInt64,
    Matches_played: UInt64,
}

export interface current_condition  {
    isInjured: Bool,
    Yellow_Card: UInt64,
    Red_Card: Bool,
    isTraining: Bool,
    Motivation: UInt64,
    Fitness: UInt64,
    Stamina: UInt64,
}

export interface technical {
    Corner: UInt64,
    Dribbling: UInt64,
    Passing: UInt64,
    Finishing: UInt64,
    Ball_control: UInt64,
    Free_kick: UInt64,
    Tackling: UInt64,
}

export interface physical {
    Speed: UInt64,
    Agility: UInt64,
    Endurance: UInt64,
    Strength: UInt64,
};

export interface mental {
    Aggression: UInt64,
    Bravery: UInt64,
    Intelligence: UInt64,
    Leadership: UInt64,
};

    



    
