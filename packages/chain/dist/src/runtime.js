import { Balance } from "@proto-kit/library";
import { Balances } from "./balances";
import { Game } from "./game";
export const modules = {
    Balances,
    Game,
};
export const config = {
    Balances: {
        totalSupply: Balance.from(10000),
    },
    Game: {}
};
export default {
    modules,
    config,
};
