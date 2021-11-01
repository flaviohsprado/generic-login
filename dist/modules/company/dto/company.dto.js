"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDTO = void 0;
const uuidv4_1 = require("uuidv4");
const class_validator_1 = require("class-validator");
class CompanyDTO {
    constructor(props, id) {
        Object.assign(this, props);
        console.log(id);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsMobilePhone)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CompanyDTO.prototype, "colorPalette", void 0);
exports.CompanyDTO = CompanyDTO;
//# sourceMappingURL=company.dto.js.map