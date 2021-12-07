"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseUtils = void 0;
const company_dto_1 = require("../modules/company/dto/company.dto");
const typeorm_1 = require("typeorm");
const typeorm_extension_1 = require("typeorm-extension");
class DatabaseUtils {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async checkIfCreateNewDatabase(companyName) {
        const companys = await this.companyRepository.findAll();
        if (!companys.find((company) => company.name === companyName)) {
            await this.createNewCompany(companyName);
            this.createDatabaseIfNotExists(companyName);
        }
    }
    async createDatabaseIfNotExists(companyName) {
        const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
        const newConnectionOptions = Object.assign({}, connectionOptions);
        newConnectionOptions.database = `${companyName}`.trim();
        await (0, typeorm_extension_1.createDatabase)({ ifNotExist: true, characterSet: 'UTF8' }, newConnectionOptions);
        const connection = await (0, typeorm_1.createConnection)(newConnectionOptions.database);
        await connection.synchronize(true);
        await connection.runMigrations({
            transaction: 'all',
        });
    }
    async createNewCompany(companyName) {
        const company = new company_dto_1.CompanyDTO({ name: companyName });
        await this.companyRepository.create(company);
    }
}
exports.DatabaseUtils = DatabaseUtils;
//# sourceMappingURL=database.utils.js.map