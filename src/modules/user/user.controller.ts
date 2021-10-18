import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from '../../dto/user.dto';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from './user.service';
import { getFormatedDateFromDate } from 'src/utils/date';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<IUser[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IUser> {
    return await this.userService.findById(id);
  }

  @Get('/email/:email')
  async findByEmail(@Param('email') email: string): Promise<IUser> {
    return await this.userService.findByEmail(email);
  }

  @Get('/name/:username')
  async findByUsername(@Param('username') username: string): Promise<IUser> {
    return await this.userService.findByUsername(username);
  }

  @Get('/firstName/:firstName')
  async findByFirstName(@Param('firstName') firstName: string): Promise<IUser> {
    return await this.userService.findByFirstName(firstName);
  }

  @Get('/lastName/:lastName')
  async findByLastName(@Param('lastName') lastName: string): Promise<IUser> {
    return await this.userService.findByLastName(lastName);
  }

  @Get('/birthDate/:birthDate')
  async findByBirthDate(@Param('birthDate') birthDate: string): Promise<IUser> {
    const dateOfBirth: String = getFormatedDateFromDate(new Date(birthDate));
    return await this.userService.findByBirthDate(dateOfBirth);
  }

  @Get('/phoneNumber/:phoneNumber')
  async findByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<IUser> {
    return await this.userService.findByPhoneNumber(phoneNumber);
  }

  @Get('/address/:address')
  async findByAddress(@Param('address') address: string): Promise<IUser> {
    return await this.userService.findByAddress(address);
  }

  @Get('/city/:city')
  async findByCity(@Param('city') city: string): Promise<IUser> {
    return await this.userService.findByCity(city);
  }

  @Get('/country/:country')
  async findByCountry(@Param('country') country: string): Promise<IUser> {
    return await this.userService.findByCountry(country);
  }

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO): Promise<IUser> {
    const user: CreateUserDTO = new CreateUserDTO(createUserDTO);
    return this.userService.create(user);
  }
}
