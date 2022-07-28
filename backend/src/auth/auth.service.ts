import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from 'src/dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const { emailID } = dto;
      if (!emailID)
        throw new HttpException('No emailID provided', HttpStatus.BAD_REQUEST);

      const checkUser = await this.userModel.findOne({ emailID });

      if (checkUser)
        throw new HttpException(
          'User with given email ID already exists',
          HttpStatus.BAD_REQUEST,
        );

      const password = await argon.hash(dto.password);
      const user = await this.userModel.create({ ...dto, password });

      const payload = {
        emailID: user.emailID,
        name: user.name,
        role: user?.role || 'student',
        id: user._id,
        companiesApplied: user.companiesApplied || [],
      };

      const token = this.jwtService.sign(payload);

      return { payload, token };
    } catch (err) {
      switch (err.status) {
        case HttpStatus.BAD_REQUEST:
          return { message: err.message };

        default:
          return { message: `Something went wrong` };
      }
    }
  }

  async signin(dto: { emailID: string; password: string }) {
    try {
      const { emailID, password } = dto;
      if (!emailID || !password)
        throw new HttpException(
          'Invalid email id or password',
          HttpStatus.BAD_REQUEST,
        );

      const user = await this.userModel.findOne({ emailID });
      if (!user || Object.keys(user).length === 0)
        throw new HttpException(
          'Invalid email id or password',
          HttpStatus.BAD_REQUEST,
        );

      const checkPassword = await argon.verify(user.password, password);
      if (!checkPassword)
        throw new HttpException(
          'Invalid email id or password',
          HttpStatus.BAD_REQUEST,
        );

      const payload = {
        emailID: user.emailID,
        role: user?.role || 'student',
        name: user.name,
        id: user._id,
        companiesApplied: user.companiesApplied || [],
      };

      const token = this.jwtService.sign(payload);

      return { payload, token };
    } catch (err) {
      switch (err.status) {
        case HttpStatus.BAD_REQUEST:
          return { message: err.message };

        default:
          return { message: `Something went wrong` };
      }
    }
  }

  async updateUser(req: any) {
    try {
      if (!req?.user) {
        throw new HttpException('Token not provided', HttpStatus.UNAUTHORIZED);
      }
      const updatedUser = await this.userModel.findOneAndUpdate(
        { emailID: req?.user?.emailID },
        req?.body,
        { new: true },
      );

      const payload = {
        name: updatedUser.name,
        emailID: updatedUser.emailID,
        role: updatedUser?.role || 'student',
        id: updatedUser._id,
        companiesApplied: updatedUser.companiesApplied || [],
      };

      const token = this.jwtService.sign(payload);

      return { payload, token };
    } catch (err) {
      if (
        err.status === HttpStatus.BAD_REQUEST ||
        err.status === HttpStatus.UNAUTHORIZED
      ) {
        throw new HttpException(err.message, err.status);
      }
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteaccount(req: any) {
    try {
      if (!req?.user)
        throw new HttpException('Token not provided', HttpStatus.UNAUTHORIZED);

      const { emailID } = req?.user;

      if (!emailID)
        throw new HttpException('Invalid Request', HttpStatus.BAD_REQUEST);

      const response = await this.userModel.findOneAndRemove({ emailID });

      if (!response)
        throw new HttpException('No User Found', HttpStatus.BAD_REQUEST);

      return { response, deleted: true };
    } catch (err) {
      if (
        err.status === HttpStatus.BAD_REQUEST ||
        err.status === HttpStatus.UNAUTHORIZED
      ) {
        throw new HttpException(err.message, err.status);
      }
      throw new HttpException(
        'Something Went Wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
