import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/dto';
import { JwtAuthGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    const data = await this.AuthService.signup(dto);
    return data;
  }

  @Post('signin')
  async signin(@Body() dto: { emailID: string; password: string }) {
    const data = await this.AuthService.signin(dto);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getprofile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Put('updateprofile')
  async updateprofile(@Request() req: any) {
    const data = await this.AuthService.updateUser(req);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('deleteaccount')
  async deleteaccount(@Request() req: any) {
    const data = await this.AuthService.deleteaccount(req);
    return data;
  }
}
