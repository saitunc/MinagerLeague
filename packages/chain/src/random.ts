import { runtimeModule,runtimeMethod, RuntimeModule, state } from "@proto-kit/module";
import { StateMap } from "@proto-kit/protocol";
import { Field, PublicKey } from "o1js";


@runtimeModule()
export class Random extends RuntimeModule<{}>{
    @state() public randomMap = StateMap.from<PublicKey,Field>(PublicKey,Field);

    @runtimeMethod()
    setRandomNumber(randomNum : Field){
        const setter = this.transaction.sender.value
        
        this.randomMap.set(this.transaction.sender.value,randomNum);
    }
}