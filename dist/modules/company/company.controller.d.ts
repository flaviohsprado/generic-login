import { CompanyService } from './company.service';
import { CompanyDTO } from './dto/company.dto';
import { ICompany } from './interfaces/company.interface';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<ICompany[]>;
    create(createCompanyDTO: CompanyDTO): Promise<ICompany>;
    update(id: string, company: CompanyDTO): Promise<ICompany>;
    delete(id: string): Promise<void>;
}
