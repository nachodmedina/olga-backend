import { Body, Controller, Get, Header, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto, User } from 'src/dto/user';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findById(@Param() id: number) {
        return this.usersService.findOneById(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }
}
