import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { CompanyDto } from 'src/dto/company.dto';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private companyService: CompaniesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('addcompany')
  async addCompany(@Request() req: any, @Body() dto: CompanyDto) {
    const data = await this.companyService.addCompanies(req, dto);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('deletecompany')
  async deleteCompany(@Request() req: any, @Body() dto: { companyID: string }) {
    const data = await this.companyService.deleteCompany(req, dto.companyID);
    return data;
  }

  @Get('getallcompanies')
  async getAllCompanies() {
    return this.companyService.getAllCompanies();
  }
}
