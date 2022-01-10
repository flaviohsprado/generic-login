"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatedDateFromDate = exports.getDateFromString = void 0;
const date_fns_1 = require("date-fns");
function getDateFromString(date) {
    const dateArray = date.split('-');
    const year = Number(dateArray[0]);
    const month = Number(dateArray[1]) - 1;
    const day = Number(dateArray[2]);
    return new Date(year, month, day);
}
exports.getDateFromString = getDateFromString;
function getFormatedDateFromDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return (0, date_fns_1.format)((0, date_fns_1.parse)(`${year}-${month}-${day}`, 'yyyy-MM-dd', new Date()), 'yyyy-dd-MM');
}
exports.getFormatedDateFromDate = getFormatedDateFromDate;
//# sourceMappingURL=date.utils.js.map