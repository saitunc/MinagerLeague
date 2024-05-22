import { TestingAppChain } from "@proto-kit/sdk";
import { PrivateKey,Bool } from "o1js";
import { log } from "@proto-kit/common";
import { BalancesKey, TokenId, UInt64 } from "@proto-kit/library";
import { Game } from "../src/game";

log.setLevel("ERROR");

describe("balances", () => {
  it("should demonstrate how balances work", async () => {
    const appChain = TestingAppChain.fromRuntime({
      Game
    });

    appChain.configurePartial({
      Runtime: {
        Balances: {
          totalSupply: UInt64.from(10000),
        },
        Game:{}
      },
    });

    await appChain.start();

    const alicePrivateKey = PrivateKey.random();
    const alice = alicePrivateKey.toPublicKey();
    const tokenId = TokenId.from(0);

    appChain.setSigner(alicePrivateKey);
    const game = appChain.runtime.resolve("Game");

    const tx1  = await appChain.transaction(alice,() =>{
        game.initializeLeagueSize();
    });

    await tx1.sign();
    await tx1.send();

    const block = await appChain.produceBlock();

    expect(block?.transactions[0].status.toBoolean()).toBe(true);

    // After this block, initial league size should not be updatable.

    const tx2  = await appChain.transaction(alice,() =>{
        game.initializeLeagueSize();
    });

    await tx2.sign();
    await tx2.send();

    const block2 = await appChain.produceBlock();
    console.log(block2?.transactions[0].statusMessage);

    expect(block2?.transactions[0].status.toBoolean()).toBe(false);

    

  }, 1_000_000);
});
