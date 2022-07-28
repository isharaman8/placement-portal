import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { TRole } from 'src/schemas/user.schema';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  emailID: string;

  @IsArray()
  role: TRole;

  @IsArray()
  companiesApplied: Array<any>;

  @IsArray()
  friends: Array<any>;
}
