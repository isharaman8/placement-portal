import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  usersApplied: Array<string>;

  @IsNotEmpty()
  @IsString()
  author: string;
}
