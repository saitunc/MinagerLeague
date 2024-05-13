import { Balances, UInt64 } from "@proto-kit/library";
import { Game } from "./game";
import { ModulesConfig } from "@proto-kit/common";
import { Team } from "./game/models/Team";

export const modules = {
  Game,
  Balances,
};


export const config: ModulesConfig<typeof modules> = {
  Balances:{
    totalSupply: UInt64.from(10_000),
  },
  Game: {
    gameId: UInt64.from(1)
  },
};

export default {
  modules,
  config,
};
