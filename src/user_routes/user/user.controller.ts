import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, Put, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-user')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createUserDto: CreateUserDto
  ) {
    const result = await this.userService.create(createUserDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-users')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.userService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-user-by-id/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.userService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-user-by-mail/')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByMail(
    @Res() reply: FastifyReply,
    @Query('mail') mail: string
  ) {
    const result = await this.userService.findOneByMail(mail);

    if (!result) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/update-user/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    const result = await this.userService.update(+id, updateUserDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-user/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    await this.userService.remove(+id);
    return reply.status(HttpStatus.NO_CONTENT).send();
  }
}
