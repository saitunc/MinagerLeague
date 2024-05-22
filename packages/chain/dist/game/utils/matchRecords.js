import { UInt64, Struct, PublicKey } from "o1js";
export class MatchRecords extends Struct({
    Played: UInt64,
    Wins: UInt64,
    Losses: UInt64,
    Draws: UInt64,
    GF: UInt64,
    GA: UInt64,
    GD: UInt64,
    Points: UInt64,
}) {
}
export class MatchResult extends Struct({
    result: "WIN" || "DRAW",
    // If result is "DRAW", key names will not mattter tho.
    winningKey: PublicKey,
    losingKey: PublicKey
}) {
}
