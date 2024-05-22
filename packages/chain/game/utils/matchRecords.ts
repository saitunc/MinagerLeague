import { UInt64, Struct, PublicKey } from "o1js";

export class MatchRecords{
    Played:UInt64;
    Wins:UInt64;
    Losses:UInt64;
    Draws:UInt64;
    GF:UInt64; // Goals For
    GA:UInt64; // Goals Against
    GD: UInt64; // Goal Difference
    Points: UInt64;

    constructor
    (Played:UInt64,
     Wins:UInt64,
     Losses:UInt64,
     Draws:UInt64,
     GF:UInt64, 
     GA:UInt64, 
     Points: UInt64){

                this.Played = Played;
                this.Wins = Wins;
                this.Losses = Losses;
                this.Draws = Draws;
                this.GF = GF;
                this.GA
                this.GD = GF.sub(GA);
                this.Points = Points;
            }
}

