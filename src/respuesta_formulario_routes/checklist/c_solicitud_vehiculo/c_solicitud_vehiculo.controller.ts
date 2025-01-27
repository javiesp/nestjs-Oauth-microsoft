import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, Put, HttpStatus } from '@nestjs/common';
import { CSolicitudVehiculoService } from './c_solicitud_vehiculo.service';
import { CreateCSolicitudVehiculoDto } from './dto/create-c_solicitud_vehiculo.dto';
import { UpdateCSolicitudVehiculoDto } from './dto/update-c_solicitud_vehiculo.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('c-solicitud-vehiculo')
export class CSolicitudVehiculoController {
  constructor(private readonly cSolicitudVehiculoService: CSolicitudVehiculoService) {}

  @Post('/create-solicitud')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createCSolicitudVehiculoDto: CreateCSolicitudVehiculoDto
  ) {
    const result = await this.cSolicitudVehiculoService.create(createCSolicitudVehiculoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-all-solicitudes')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.cSolicitudVehiculoService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.cSolicitudVehiculoService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-solicitud-by-respuestaID')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByRespuestaID(
    @Res() reply: FastifyReply,
    @Query('respuesta_formulario_id') respuesta_formulario_id: string
  ) {
    const result = await this.cSolicitudVehiculoService.findOneByRespuestaID(respuesta_formulario_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/update-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateCSolicitudVehiculoDto: UpdateCSolicitudVehiculoDto
  ) {
    const result = await this.cSolicitudVehiculoService.update(+id, updateCSolicitudVehiculoDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-solicitud/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.cSolicitudVehiculoService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
