import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { companyProviders } from './company.provider';
import { DatabaseModule } from '../database/database.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [CompanyController],
  providers: [...companyProviders, CompanyService],
  exports: [...companyProviders, CompanyService],
})
export class CompanyModule {}
