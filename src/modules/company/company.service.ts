import { Inject, Injectable } from '@nestjs/common';
import { Company } from 'src/entities/company.entity';
import { Repository } from 'typeorm';
import { CompanyDTO } from './dto/company.dto';
import { ICompany } from './interfaces/company.interface';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>,
  ) {}

  public async findAll(): Promise<ICompany[]> {
    return await this.companyRepository.find();
  }

  public async create(company: CompanyDTO): Promise<ICompany> {
    return await this.companyRepository.save(company);
  }

  public async update(id: string, company: CompanyDTO): Promise<ICompany> {
    return await this.companyRepository.save({ ...company, id });
  }

  public async destroy(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
