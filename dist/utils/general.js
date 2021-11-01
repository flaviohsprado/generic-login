"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class General {
    getDateFromString(date) {
        const dateArray = date.split('-');
        const year = Number(dateArray[0]);
        const month = Number(dateArray[1]) - 1;
        const day = Number(dateArray[2]);
        return new Date(year, month, day);
    }
}
exports.default = General;
//# sourceMappingURL=general.js.map