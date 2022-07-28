import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from 'src/schemas/company.schema';
import { CompanyDto } from 'src/dto/company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async addCompany(req: any, dto: CompanyDto) {
    try {
      if (!req?.user)
        throw new HttpException(
          'Unauthorized request, no token found',
          HttpStatus.UNAUTHORIZED,
        );

      if (req.user.role !== 'admin')
        throw new HttpException(
          'Students cannot create job openings',
          HttpStatus.UNAUTHORIZED,
        );

      const { emailID } = req.user;

      const user = await this.userModel.findOne({ emailID });
      if (!user)
        throw new HttpException(
          'No user found with given id',
          HttpStatus.BAD_REQUEST,
        );

      // const company = await this.companyModel.find({
      //   usersApplied: null,
      // });

      // return company;
      // console.log(user);

      const payload = {
        name: dto.name,
        description: dto.description,
        author: user._id.toString(),
      };

      // console.log(payload);
      let company: any;
      try {
        company = await this.companyModel.create(payload);
      } catch (err) {
        return { error: err.message };
      }

      console.log('done');

      // const companies = await this.companyModel.find();

      return company;
    } catch (err) {
      console.log(err);
      if (
        err.status === HttpStatus.BAD_REQUEST ||
        err.status === HttpStatus.UNAUTHORIZED
      ) {
        throw new HttpException(err.message, err.status);
      }
      throw new HttpException(
        'Something Went Wrong, ' + err.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteCompany(req: any, companyID: string) {
    try {
      if (!req.user)
        throw new HttpException('No token provided', HttpStatus.UNAUTHORIZED);

      if (req.user.role !== 'admin')
        throw new HttpException(
          'Students cannot delete job openings',
          HttpStatus.UNAUTHORIZED,
        );

      const user = await this.userModel.findOne({ emailID: req.user.emailID });

      if (!user)
        throw new HttpException(
          'No user found with given id',
          HttpStatus.BAD_REQUEST,
        );

      const deletedCompany = await this.companyModel.findOneAndRemove({
        author: user._id.toString(),
        _id: companyID,
      });

      if (!deletedCompany)
        throw new HttpException('No company found', HttpStatus.BAD_REQUEST);

      return { deletedCompany, deleted: true };
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

  async getAllCompanies() {
    try {
      const allCompanies = await this.companyModel
        .find()
        .populate({ path: 'author', select: { name: 1, _id: 0 } })
        .populate({ path: 'usersApplied', select: { name: 1, _id: 0 } });
      return allCompanies;
    } catch (err) {
      return { message: err.message };
    }
  }

  async applyForCompany(req: any, companyID: string) {
    try {
      if (!req.user)
        throw new HttpException(
          'Unauthorized request, no token found',
          HttpStatus.UNAUTHORIZED,
        );

      const user = await this.userModel.findOne({ emailID: req.user.emailID });

      const { _id } = user._id;

      // console.log('userId:', _id);

      if (!user)
        throw new HttpException('No user found', HttpStatus.BAD_REQUEST);

      const updatedCompany = await this.companyModel.findOneAndUpdate(
        {
          _id: companyID,
          usersApplied: { $not: { $in: [_id] } },
        },
        { $push: { usersApplied: user._id.toString() } },
        {
          new: true,
          populate: { path: 'usersApplied', select: { name: 1, _id: 0 } },
        },
      );

      if (!updatedCompany)
        throw new HttpException('No company found', HttpStatus.NOT_FOUND);

      return updatedCompany;
    } catch (error) {
      return { message: error.message };
    }
  }
}
