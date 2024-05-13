import { RuntimeModule, runtimeMethod, runtimeModule, state } from "@proto-kit/module";
import { StateMap, assert } from "@proto-kit/protocol";

import { Bool, Field, PublicKey } from "o1js";


// Players are required to enter random numbers each day. That way they'll be able to enable their own seed for random function with seed.
@runtimeModule()
export class Random extends RuntimeModule<{}>{
    @state() public randomMap = StateMap.from<PublicKey,Field>(
        PublicKey,
        Field
    );
    
    @runtimeMethod()
    public setRandom(initRandom: Field){
        assert(this.randomMap.get(this.transaction.sender.value).isSome, "Use update function.");

        this.randomMap.set(this.transaction.sender.value, initRandom);
    }

    @runtimeMethod()
    public useRandom(){
        assert(this.randomMap.get(this.transaction.sender.value).isSome.not(), "You are not in this games map!");
        
        // Not needed for outside, since it can be accessed by appChain.query. However, necessary for intermodule actions.
        return this.randomMap.get(this.transaction.sender.value);
    }    

    @runtimeMethod()
    public updateRandom(newRandom: Field, isUser: Bool){
        assert(isUser, "No such player!");

        this.randomMap.set(this.transaction.sender.value , newRandom);
    }
    
}

