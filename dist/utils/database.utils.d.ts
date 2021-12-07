import { CompanyService } from '../modules/company/company.service';
export declare class DatabaseUtils {
    private companyRepository;
    constructor(companyRepository: CompanyService);
    checkIfCreateNewDatabase(companyName: string): Promise<void>;
    createDatabaseIfNotExists(companyName: string): Promise<void>;
    private createNewCompany;
}
