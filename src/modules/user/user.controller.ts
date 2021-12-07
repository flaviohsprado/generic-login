import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import {
  GrpcMethod,
  ClientGrpc,
  Client,
  Transport,
} from '@nestjs/microservices';
import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';
import { getFormatedDateFromDate } from '../../utils/date.utils';
import { JwtAuthGuard } from '../../services/jwt/jwt-auth.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileDTO } from '../file/dto/file.dto';

@Controller('private/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @GrpcMethod('UserService')
  async findById(@Param('id') id: string): Promise<IUser> {
    return await this.userService.findByKey('id', id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/email/:email')
  @GrpcMethod('UserService')
  async findByEmail(@Param('email') email: string): Promise<IUser> {
    return await this.userService.findByKey('email', email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/name/:username')
  async findByUsername(@Param('username') username: string): Promise<IUser> {
    return await this.userService.findByKey('username', username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/firstName/:firstName')
  async findByFirstName(@Param('firstName') firstName: string): Promise<IUser> {
    return await this.userService.findByKey('firstName', firstName);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/lastName/:lastName')
  async findByLastName(@Param('lastName') lastName: string): Promise<IUser> {
    return await this.userService.findByKey('lastName', lastName);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/birthDate/:birthDate')
  async findByBirthDate(@Param('birthDate') birthDate: string): Promise<IUser> {
    const dateOfBirth: string = getFormatedDateFromDate(new Date(birthDate));
    return await this.userService.findByKey('dateOfBirth', dateOfBirth);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/phoneNumber/:phoneNumber')
  async findByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<IUser> {
    return await this.userService.findByKey('phoneNumber', phoneNumber);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/address/:address')
  async findByAddress(@Param('address') address: string): Promise<IUser> {
    return await this.userService.findByKey('address', address);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/city/:city')
  async findByCity(@Param('city') city: string): Promise<IUser> {
    return await this.userService.findByKey('city', city);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/country/:country')
  async findByCountry(@Param('country') country: string): Promise<IUser> {
    return await this.userService.findByKey('country', country);
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @UploadedFiles() files: FileDTO[],
    @Body() createUserDTO: UserDTO,
  ): Promise<IUser> {
    const user: UserDTO = await new UserDTO(createUserDTO).encryptPassword();
    return this.userService.create(user, files);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UseInterceptors(FilesInterceptor('files'))
  async update(
    @UploadedFiles() files: FileDTO[],
    @Param('id') id: string,
    @Body() user: UserDTO,
  ): Promise<IUser> {
    const updateUser = await new UserDTO(user, id).encryptPassword();
    return await this.userService.update(id, updateUser, files);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.destroy(id);
  }
}
