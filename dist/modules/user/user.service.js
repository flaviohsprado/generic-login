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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
const file_1 = require("../../utils/file");
const file_service_1 = require("../file/file.service");
const file_interface_1 = require("../../interfaces/file.interface");
let UserService = class UserService {
    constructor(userRepository, fileRepository) {
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
    }
    async findAll() {
        const users = await this.userRepository.find();
        for (const user of users) {
            user.file = await this.fileRepository.findByKey('ownerId', user.id);
        }
        return users;
    }
    async findByKey(key, value) {
        const user = await this.userRepository.findOne({
            where: { [key]: value },
        });
        if (user)
            user.file = await this.fileRepository.findByKey('ownerId', user.id);
        return user;
    }
    async create(user, files) {
        const filesPaths = await file_1.default.upload(files, user.id, 'user');
        await this.fileRepository.create(filesPaths);
        return await this.userRepository.save(user);
    }
    async update(id, user, files) {
        const userAvatar = await this.fileRepository.findByKey('ownerId', id);
        if (files.length) {
            if (userAvatar) {
                await file_1.default.delete([userAvatar.key]);
                await this.fileRepository.destroy([userAvatar]);
            }
            const filesPaths = await file_1.default.upload(files, id, 'user');
            await this.fileRepository.create(filesPaths);
        }
        await this.userRepository.save(Object.assign(Object.assign({}, user), { id }));
        return await this.userRepository.findOne(id);
    }
    async destroy(id) {
        const userAvatar = await this.fileRepository.findByKey('ownerId', id);
        await file_1.default.delete([userAvatar.key]);
        await this.fileRepository.destroy([userAvatar]);
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_service_1.FileService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map