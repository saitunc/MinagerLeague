import { RuntimeModule } from "@proto-kit/module";
import { StateMap } from "@proto-kit/protocol";
import { Field, PublicKey } from "o1js";
export declare class Random extends RuntimeModule<{}> {
    randomMap: StateMap<PublicKey, import("o1js/dist/node/lib/field").Field>;
    setRandomNumber(randomNum: Field): void;
}
//# sourceMappingURL=random.d.ts.map