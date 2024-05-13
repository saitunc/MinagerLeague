
import {Player} from './Player.js';

//grouped properties by using interface

export interface afterPositioning {
    x_axsis: number;
    y_axsis: number;
    selectedPlayer: Player;
    point: number;
    }
    
export interface goalkeeping {
    Focus: number;
    Reflex: number;
    Handling: number;
    Kicking: number;
    one_on_one: number
    }
export interface personal {
    Name: string;
    Age: number;
    Position: string;
    Side: string;
    }
export interface history {
    Goals: number;
    Passes: number;
    Assists: number;
    Matches_played: number;
    }
export interface current_condition {
    isInjured: boolean;
    Yellow_Card: number;
    Red_Card: boolean;
    isTraining: boolean;
    Motivation: number;
    Fitness: number;
    Stamina: number;
    }
export interface technical {
    Corner: number;
    Dribbling: number;
    Passing: number;
    Finishing: number;
    Ball_control: number;
    Free_kick: number;
    Tackling: number;
    }
export interface physical {
    Speed: number;
    Agility: number;
    Endurance: number;
    Strength: number;
    }
export interface mental {
    Aggression: number;
    Bravery: number;
    Intelligence: number;
    Leadership: number;
    }

    
