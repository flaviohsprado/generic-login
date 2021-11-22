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
const common_1 = require("@nestjs/common");
const file_dto_1 = require("../modules/file/dto/file.dto");
const s3_service_1 = require("../services/s3/s3.service");
let FileUpload = class FileUpload {
    constructor() {
        this.uploadService = new s3_service_1.S3Service();
    }
    async upload(files, ownerId, ownerType) {
        const uploadedFiles = await this.uploadService.upload(files, ownerId, ownerType);
        if (!uploadedFiles) {
            throw new Error('Not have file ou files for uploaded!');
        }
        return uploadedFiles;
    }
    async delete(keys) {
        await this.uploadService.delete(keys);
    }
};
FileUpload = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileUpload);
exports.default = new FileUpload();
//# sourceMappingURL=file.utils.js.map