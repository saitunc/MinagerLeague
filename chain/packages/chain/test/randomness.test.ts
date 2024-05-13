import "reflect-metadata"
import { TestingAppChain } from "@proto-kit/sdk";
import { PrivateKey, Field, Bool, CircuitString } from "o1js";
import { log } from "@proto-kit/common";
import  { Random }  from "../src/randomness";
import { UInt64 } from "@proto-kit/library";
import { Game } from "../src/game";

log.setLevel("ERROR");

describe("Randomness", () => {
  it("should demonstrate how randomness module work", async () => {
    const appChain = TestingAppChain.fromRuntime({
      Game,
      Random,
    })

    appChain.configurePartial({
      Runtime: {
        Game: {
          gameId:UInt64.from(1)
        },
        Balances: {
          totalSupply: UInt64.from(10_000),
        },
        Random:{},
      },
    });

    await appChain.start();

    const bobPrivateKey = PrivateKey.random();
    
    const bob = bobPrivateKey.toPublicKey();
    
    appChain.setSigner(bobPrivateKey);
    
    const randomness = appChain.runtime.resolve("Random");
    
    const updatedRand = Field.from(135645352356);

    const tx1 = await appChain.transaction(bob, () => {
      randomness.setRandom(updatedRand);
    });
    
    await tx1.sign();

    await tx1.send();

    const block = await appChain.produceBlock();

    const rand1Promise = await appChain.query.runtime.Random.randomMap.get(bob);
    
    const rand1 = rand1Promise?.toBigInt();
    
    console.log(rand1)

    expect(rand1).toBe(135645352356n);
    

    const updatedRand2 = Field.from(45678124123);

    const isUserPromise = await appChain.query.runtime.Game.players.get(bob);

    const isUser = (isUserPromise === undefined ) ? Bool(true) : Bool(false);

    const tx2 = await appChain.transaction(bob, () => {
      randomness.updateRandom(updatedRand2,isUser);
    });
    
    await tx2.sign();
    await tx2.send();

    const block2 = await appChain.produceBlock();
    
    const rand2Promise = await appChain.query.runtime.Random.randomMap.get(bob)
    const rand2 = rand2Promise?.toBigInt();

   expect(rand2).toBe(45678124123n);

  }, 1_000_000);
});
