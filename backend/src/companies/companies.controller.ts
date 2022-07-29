import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
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
    const data = await this.companyService.addCompany(req, dto);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('deletecompany')
  async deleteCompany(@Request() req: any, @Body() dto: { companyID: string }) {
    const data = await this.companyService.deleteCompany(req, dto.companyID);
    return data;
  }

  @Get('getallcompanies')
  async getAllCompanies(@Query() query: any) {
    return this.companyService.getAllCompanies(query);
  }

  @UseGuards(JwtAuthGuard)
  @Post('applyforcompany')
  async applyForCompany(
    @Request() req: any,
    @Body() dto: { companyID: string },
  ) {
    const data = await this.companyService.applyForCompany(req, dto.companyID);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Put('updatecompanydata')
  async updateCompany(@Request() req: any, @Body() dto: any) {
    const data = await this.companyService.updateCompany(req, dto);
    return data;
  }
}
