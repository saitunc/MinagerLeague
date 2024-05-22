import { RuntimeModule } from "@proto-kit/module";
import { State, StateMap } from "@proto-kit/protocol";
import { PublicKey, UInt64 } from "o1js";
import { MatchResult } from "../game/utils/matchRecords";
declare const ProvablePlayer_base: (new (value: {
    name: import("o1js/dist/node/lib/field").Field;
    ownerId: import("o1js/dist/node/lib/field").Field;
    Personal: {
        isInjured: import("o1js/dist/node/lib/bool").Bool;
    };
}) => {
    name: import("o1js/dist/node/lib/field").Field;
    ownerId: import("o1js/dist/node/lib/field").Field;
    Personal: {
        isInjured: import("o1js/dist/node/lib/bool").Bool;
    };
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    name: import("o1js/dist/node/lib/field").Field;
    ownerId: import("o1js/dist/node/lib/field").Field;
    Personal: {
        isInjured: import("o1js/dist/node/lib/bool").Bool;
    };
}> & {
    toInput: (x: {
        name: import("o1js/dist/node/lib/field").Field;
        ownerId: import("o1js/dist/node/lib/field").Field;
        Personal: {
            isInjured: import("o1js/dist/node/lib/bool").Bool;
        };
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        name: import("o1js/dist/node/lib/field").Field;
        ownerId: import("o1js/dist/node/lib/field").Field;
        Personal: {
            isInjured: import("o1js/dist/node/lib/bool").Bool;
        };
    }) => {
        name: string;
        ownerId: string;
        Personal: {
            isInjured: boolean;
        };
    };
    fromJSON: (x: {
        name: string;
        ownerId: string;
        Personal: {
            isInjured: boolean;
        };
    }) => {
        name: import("o1js/dist/node/lib/field").Field;
        ownerId: import("o1js/dist/node/lib/field").Field;
        Personal: {
            isInjured: import("o1js/dist/node/lib/bool").Bool;
        };
    };
};
export declare class ProvablePlayer extends ProvablePlayer_base {
}
declare const ProvableTeam_base: (new (value: {
    name: import("o1js/dist/node/lib/field").Field;
    players: ProvablePlayer[];
}) => {
    name: import("o1js/dist/node/lib/field").Field;
    players: ProvablePlayer[];
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    name: import("o1js/dist/node/lib/field").Field;
    players: ProvablePlayer[];
}> & {
    toInput: (x: {
        name: import("o1js/dist/node/lib/field").Field;
        players: ProvablePlayer[];
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        name: import("o1js/dist/node/lib/field").Field;
        players: ProvablePlayer[];
    }) => {
        name: string;
        players: {
            name: string;
            ownerId: string;
            Personal: {
                isInjured: boolean;
            };
        }[];
    };
    fromJSON: (x: {
        name: string;
        players: {
            name: string;
            ownerId: string;
            Personal: {
                isInjured: boolean;
            };
        }[];
    }) => {
        name: import("o1js/dist/node/lib/field").Field;
        players: ProvablePlayer[];
    };
};
export declare class ProvableTeam extends ProvableTeam_base {
    getPlayerByName(name: string): number;
}
declare const Scores_base: (new (value: {
    Points: UInt64;
    Win: UInt64;
    Loss: UInt64;
    Draw: UInt64;
}) => {
    Points: UInt64;
    Win: UInt64;
    Loss: UInt64;
    Draw: UInt64;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/snarky").ProvablePure<{
    Points: UInt64;
    Win: UInt64;
    Loss: UInt64;
    Draw: UInt64;
}> & {
    toInput: (x: {
        Points: UInt64;
        Win: UInt64;
        Loss: UInt64;
        Draw: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        Points: UInt64;
        Win: UInt64;
        Loss: UInt64;
        Draw: UInt64;
    }) => {
        Points: string;
        Win: string;
        Loss: string;
        Draw: string;
    };
    fromJSON: (x: {
        Points: string;
        Win: string;
        Loss: string;
        Draw: string;
    }) => {
        Points: UInt64;
        Win: UInt64;
        Loss: UInt64;
        Draw: UInt64;
    };
};
export declare class Scores extends Scores_base {
}
export declare class Game extends RuntimeModule<{}> {
    teams: StateMap<PublicKey, ProvableTeam>;
    leagueSize: State<UInt64>;
    totalScoreBoard: StateMap<PublicKey, Scores>;
    teamBalances: StateMap<PublicKey, UInt64>;
    register(team: ProvableTeam): void;
    initializeLeagueSize(): void;
    updateScores(result: MatchResult): void;
}
export {};
//# sourceMappingURL=game.d.ts.map