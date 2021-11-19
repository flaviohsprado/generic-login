"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.name = 'teste01';
    }
    alterName() {
        const teste01 = new Teste();
        console.log(this.name);
        teste01.alteraNome(this);
        console.log(this.name);
        return this;
    }
}
exports.default = new Cart();
class Teste {
    alteraNome(cart) {
        cart.name = 'teste02';
        return cart;
    }
}
//# sourceMappingURL=teste.js.map