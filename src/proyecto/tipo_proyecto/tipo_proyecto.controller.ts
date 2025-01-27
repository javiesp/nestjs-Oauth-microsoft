import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpStatus, Query } from '@nestjs/common';
import { TipoProyectoService } from './tipo_proyecto.service';
import { CreateTipoProyectoDto } from './dto/create-tipo_proyecto.dto';
import { UpdateTipoProyectoDto } from './dto/update-tipo_proyecto.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';

@Controller('tipo-proyecto')
export class TipoProyectoController {
  constructor(private readonly tipoProyectoService: TipoProyectoService) {}

  @Post('/create-tipo-proyecto')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createTipoProyectoDto: CreateTipoProyectoDto
  ) {
    const result = await this.tipoProyectoService.create(createTipoProyectoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-tipo-proyecto')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
  ) {
    const result = await this.tipoProyectoService.findAll();
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-tipo-proyecto-by-id/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.tipoProyectoService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Patch('/update-tipo/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateTipoProyectoDto: UpdateTipoProyectoDto
  ) {
    const result = await this.tipoProyectoService.update(+id, updateTipoProyectoDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-tipo/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.tipoProyectoService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}