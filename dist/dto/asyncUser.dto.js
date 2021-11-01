"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const sleep = (0, util_1.promisify)(setTimeout);
class Example {
    constructor(props, id) {
        return new Promise(async (resolve, reject) => {
            try {
                await sleep(1000);
                Object.assign(this, props);
            }
            catch (ex) {
                return reject(ex);
            }
            resolve(this);
        });
        Promise();
    }
}
//# sourceMappingURL=asyncUser.dto.js.map