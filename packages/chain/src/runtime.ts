import { Balance } from "@proto-kit/library";
import { Balances } from "./balances";
import { ModulesConfig } from "@proto-kit/common";
import { Game } from "./game";
import { Random } from "./random";

export const modules = {
  Balances,
  Game,
  Random,
};

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000),
  },
  Game:{},
  Random:{}
};

export default {
  modules,
  config,
};
