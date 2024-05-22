import { Balances } from "./balances";
import { ModulesConfig } from "@proto-kit/common";
import { Game } from "./game";
import { Random } from "./random";
export declare const modules: {
    Balances: typeof Balances;
    Game: typeof Game;
    Random: typeof Random;
};
export declare const config: ModulesConfig<typeof modules>;
declare const _default: {
    modules: {
        Balances: typeof Balances;
        Game: typeof Game;
        Random: typeof Random;
    };
    config: ModulesConfig<{
        Balances: typeof Balances;
        Game: typeof Game;
        Random: typeof Random;
    }>;
};
export default _default;
//# sourceMappingURL=runtime.d.ts.map