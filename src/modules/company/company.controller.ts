import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/services/jwt/jwt-auth.guard';
import { CompanyService } from './company.service';
import { CompanyDTO } from './dto/company.dto';
import { ICompany } from './interfaces/company.interface';

@Controller('private/companys')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<ICompany[]> {
    return await this.companyService.findAll();
  }

  @Post()
  async create(@Body() createCompanyDTO: CompanyDTO): Promise<ICompany> {
    const company: CompanyDTO = await new CompanyDTO(createCompanyDTO);
    return this.companyService.create(company);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() company: CompanyDTO,
  ): Promise<ICompany> {
    const updateCompany = await new CompanyDTO(company);
    return await this.companyService.update(id, updateCompany);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.companyService.destroy(id);
  }
}
