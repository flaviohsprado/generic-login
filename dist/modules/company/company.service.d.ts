import { Company } from 'src/entities/company.entity';
import { Repository } from 'typeorm';
import { CompanyDTO } from './dto/company.dto';
import { ICompany } from './interfaces/company.interface';
export declare class CompanyService {
    private companyRepository;
    constructor(companyRepository: Repository<Company>);
    findAll(): Promise<ICompany[]>;
    create(company: CompanyDTO): Promise<ICompany>;
    update(id: string, company: CompanyDTO): Promise<ICompany>;
    destroy(id: string): Promise<void>;
}
