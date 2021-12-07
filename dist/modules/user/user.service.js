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
const user_dto_1 = require("./dto/user.dto");
const file_utils_1 = require("../../utils/file.utils");
const file_service_1 = require("../file/file.service");
const error_utils_1 = require("../../utils/error.utils");
const company_service_1 = require("../company/company.service");
const database_utils_1 = require("../../utils/database.utils");
const email_utils_1 = require("../../utils/email.utils");
let UserService = class UserService {
    constructor(userRepository, fileRepository, companyService) {
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
        this.companyService = companyService;
        this.emailUtils = new email_utils_1.EmailUtils(this.userRepository);
        this.databaseUtils = new database_utils_1.DatabaseUtils(this.companyService);
    }
    async findAll() {
        const users = await this.userRepository.find();
        for (const user of users) {
            let userAux = new user_dto_1.UserDTO(Object.assign({}, user)).hideSensitiveData();
            userAux.file = await this.fileRepository.findByKey('ownerId', user.id);
            Object.assign(user, userAux);
        }
        return users;
    }
    async findByKey(key, value, encodeSensitiveData = true) {
        const user = await this.userRepository.findOne({
            where: { [key]: value },
        });
        let userAux;
        if (encodeSensitiveData) {
            userAux = new user_dto_1.UserDTO(Object.assign({}, user)).encodeSensitiveData();
        }
        else {
            userAux = new user_dto_1.UserDTO(Object.assign({}, user));
        }
        if (user)
            userAux.file = await this.fileRepository.findByKey('ownerId', user.id);
        Object.assign(user, userAux);
        return user;
    }
    async create(user, files) {
        if (await this.emailUtils.checkEmailAlreadyExists(user.email))
            throw new error_utils_1.default(202, 'Email already exists');
        this.databaseUtils.checkIfCreateNewDatabase(user.companyName);
        const filesPaths = await file_utils_1.default.upload(files, user.id, 'user');
        await this.fileRepository.create(filesPaths);
        return await this.userRepository.save(user);
    }
    async update(id, user, files) {
        if (await this.emailUtils.checkEmailAlreadyExists(user.email))
            throw new Error('Email already exists');
        const userAvatar = await this.fileRepository.findByKey('ownerId', id);
        if (files.length) {
            if (userAvatar) {
                await file_utils_1.default.delete([userAvatar.key]);
                await this.fileRepository.destroy([userAvatar]);
            }
            const filesPaths = await file_utils_1.default.upload(files, id, 'user');
            await this.fileRepository.create(filesPaths);
        }
        await this.userRepository.save(Object.assign(Object.assign({}, user), { id }));
        return await this.userRepository.findOne(id);
    }
    async destroy(id) {
        const userAvatar = await this.fileRepository.findByKey('ownerId', id);
        await file_utils_1.default.delete([userAvatar.key]);
        await this.fileRepository.destroy([userAvatar]);
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_service_1.FileService,
        company_service_1.CompanyService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map