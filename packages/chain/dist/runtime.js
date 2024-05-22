import { Balance } from "@proto-kit/library";
import { Balances } from "./balances";
import { Game } from "./game";
import { Random } from "./random";
export const modules = {
    Balances,
    Game,
    Random,
};
export const config = {
    Balances: {
        totalSupply: Balance.from(10000),
    },
    Game: {},
    Random: {}
};
export default {
    modules,
    config,
};
