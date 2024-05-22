var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { runtimeModule, runtimeMethod, RuntimeModule, state } from "@proto-kit/module";
import { StateMap } from "@proto-kit/protocol";
import { Field, PublicKey } from "o1js";
let Random = class Random extends RuntimeModule {
    constructor() {
        super(...arguments);
        this.randomMap = StateMap.from(PublicKey, Field);
    }
    setRandomNumber(randomNum) {
        const setter = this.transaction.sender.value;
        this.randomMap.set(this.transaction.sender.value, randomNum);
    }
};
__decorate([
    state(),
    __metadata("design:type", Object)
], Random.prototype, "randomMap", void 0);
__decorate([
    runtimeMethod(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field]),
    __metadata("design:returntype", void 0)
], Random.prototype, "setRandomNumber", null);
Random = __decorate([
    runtimeModule()
], Random);
export { Random };
