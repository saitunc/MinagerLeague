import { UInt64, Struct } from "o1js";

export class MatchRecords extends Struct({
    Played:UInt64,
    Wins:UInt64,
    Losses:UInt64,
    Draws:UInt64,
    GF:UInt64, // Goals For
    GA:UInt64, // Goals Against
    GD: UInt64, // Goal Difference
    Points: UInt64,
    
}){
    constructor(
        p: UInt64,
        w: UInt64,
        l: UInt64,
        d: UInt64,
        gf: UInt64,
        ga: UInt64,
        gd: UInt64,
        pts: UInt64
    )
    {
        super({Played : p, Wins: w, Losses: l, Draws: d, GF: gf, GA: ga, GD: gd, Points:pts });
    } 
}