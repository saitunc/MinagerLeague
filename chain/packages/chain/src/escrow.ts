
import { Field,
PublicKey,
   SmartContract,
   UInt64,
   TokenId,
   state as o1js_state,
   State,

} from "o1js";
import { 
    RuntimeModule,
    runtimeModule,
    state,    
} from "@proto-kit/module";
import { StateMap } from "@proto-kit/protocol";

interface League{
    users: UInt64[],

}
interface StakeConfig{}
// A module for use of server. 
@runtimeModule()
export class Register extends RuntimeModule<StakeConfig>{

    @state() public League = StateMap.from<UInt64,PublicKey>(
        UInt64,
        PublicKey,
    );
    
}