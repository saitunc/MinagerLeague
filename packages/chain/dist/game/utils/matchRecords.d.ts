import { UInt64, PublicKey } from "o1js";
declare const MatchRecords_base: (new (value: {
    Played: UInt64;
    Wins: UInt64;
    Losses: UInt64;
    Draws: UInt64;
    GF: UInt64;
    GA: UInt64;
    GD: UInt64;
    Points: UInt64;
}) => {
    Played: UInt64;
    Wins: UInt64;
    Losses: UInt64;
    Draws: UInt64;
    GF: UInt64;
    GA: UInt64;
    GD: UInt64;
    Points: UInt64;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    Played: UInt64;
    Wins: UInt64;
    Losses: UInt64;
    Draws: UInt64;
    GF: UInt64;
    GA: UInt64;
    GD: UInt64;
    Points: UInt64;
}> & {
    toInput: (x: {
        Played: UInt64;
        Wins: UInt64;
        Losses: UInt64;
        Draws: UInt64;
        GF: UInt64;
        GA: UInt64;
        GD: UInt64;
        Points: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        Played: UInt64;
        Wins: UInt64;
        Losses: UInt64;
        Draws: UInt64;
        GF: UInt64;
        GA: UInt64;
        GD: UInt64;
        Points: UInt64;
    }) => {
        Played: string;
        Wins: string;
        Losses: string;
        Draws: string;
        GF: string;
        GA: string;
        GD: string;
        Points: string;
    };
    fromJSON: (x: {
        Played: string;
        Wins: string;
        Losses: string;
        Draws: string;
        GF: string;
        GA: string;
        GD: string;
        Points: string;
    }) => {
        Played: UInt64;
        Wins: UInt64;
        Losses: UInt64;
        Draws: UInt64;
        GF: UInt64;
        GA: UInt64;
        GD: UInt64;
        Points: UInt64;
    };
};
export declare class MatchRecords extends MatchRecords_base {
}
declare const MatchResult_base: (new (value: {
    result: never;
    winningKey: PublicKey;
    losingKey: PublicKey;
}) => {
    result: never;
    winningKey: PublicKey;
    losingKey: PublicKey;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/lib/provable").Provable<{
    result: never;
    winningKey: PublicKey;
    losingKey: PublicKey;
}> & {
    toInput: (x: {
        result: never;
        winningKey: PublicKey;
        losingKey: PublicKey;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        result: never;
        winningKey: PublicKey;
        losingKey: PublicKey;
    }) => {
        result: any;
        winningKey: string;
        losingKey: string;
    };
    fromJSON: (x: {
        result: any;
        winningKey: string;
        losingKey: string;
    }) => {
        result: never;
        winningKey: PublicKey;
        losingKey: PublicKey;
    };
};
export declare class MatchResult extends MatchResult_base {
}
export {};
//# sourceMappingURL=matchRecords.d.ts.map