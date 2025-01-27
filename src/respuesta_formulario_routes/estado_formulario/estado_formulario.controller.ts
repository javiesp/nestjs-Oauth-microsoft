import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Query, HttpStatus } from '@nestjs/common';
import { EstadoFormularioService } from './estado_formulario.service';
import { CreateEstadoFormularioDto } from './dto/create-estado_formulario.dto';
import { UpdateEstadoFormularioDto } from './dto/update-estado_formulario.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('estado-formulario')
export class EstadoFormularioController {
  constructor(private readonly estadoFormularioService: EstadoFormularioService) {}

  @Post('/create-estado')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createEstadoFormularioDto: CreateEstadoFormularioDto
  ) {
    const result = await this.estadoFormularioService.create(createEstadoFormularioDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-all-estados')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.estadoFormularioService.findAll();
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-estado/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.estadoFormularioService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Patch('/update-estado/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateEstadoFormularioDto: UpdateEstadoFormularioDto
  ) {
    const result = await this.estadoFormularioService.update(+id, updateEstadoFormularioDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-estado/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    await this.estadoFormularioService.remove(+id);
    return reply.status(HttpStatus.OK).send({ message: 'EstadoFormulario removed successfully' });
  }
}
