import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

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

  @IsNumber()
  @IsNotEmpty()
  numOpenings: number;

  @IsString()
  @IsNotEmpty()
  jobDescription: string;

  @IsBoolean()
  @IsNotEmpty()
  currentlyHiring: boolean;

  @IsString()
  location: string;
}
