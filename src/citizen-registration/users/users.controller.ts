import {
  Controller, Get, Post, Body, Put, Param, Delete,
  Render
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  
  @Get('create')
  @Render('users/create-user.html')
  createForm(){
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':no')
  findOne(@Param('no') no: string) {
    return this.usersService.findOne(+no);
  }
  @Put(':no')
  update(@Param('no') no: string, @Body() updateUserDto:
    UpdateUserDto) {
    return this.usersService.update(+no, updateUserDto);
  }
  @Delete(':no')
  remove(@Param('no') no: string) {
    return this.usersService.remove(+no);
  }
}
