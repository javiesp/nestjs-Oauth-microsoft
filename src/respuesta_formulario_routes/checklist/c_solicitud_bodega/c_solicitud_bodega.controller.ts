import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Query, HttpStatus } from '@nestjs/common';
import { CSolicitudBodegaService } from './c_solicitud_bodega.service';
import { CreateCSolicitudBodegaDto } from './dto/create-c_solicitud_bodega.dto';
import { UpdateCSolicitudBodegaDto } from './dto/update-c_solicitud_bodega.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('c-solicitud-bodega')
export class CSolicitudBodegaController {
  constructor(private readonly cSolicitudBodegaService: CSolicitudBodegaService) {}

  @Post('/create-solicitud')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createCSolicitudBodegaDto: CreateCSolicitudBodegaDto
  ) {
    const result = await this.cSolicitudBodegaService.create(createCSolicitudBodegaDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-all-solicitudes')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.cSolicitudBodegaService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.cSolicitudBodegaService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-solicitud-by-respuestaID')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByRespuestaID(
    @Res() reply: FastifyReply,
    @Query('respuesta_formulario_id') respuesta_formulario_id: string
  ) {
    const result = await this.cSolicitudBodegaService.findOneByRespuestaID(respuesta_formulario_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/update-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateCSolicitudBodegaDto: UpdateCSolicitudBodegaDto
  ) {
    const result = await this.cSolicitudBodegaService.update(+id, updateCSolicitudBodegaDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.cSolicitudBodegaService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
