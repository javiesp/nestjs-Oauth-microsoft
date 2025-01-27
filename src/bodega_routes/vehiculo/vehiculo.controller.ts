import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, Put, Res } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Post('/create-vehiculo')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createVehiculoDto: CreateVehiculoDto
  ) {
    const result = await this.vehiculoService.create(createVehiculoDto);
    return reply.status(201).send(result);
  }

  @Get('/get-all-vehiculos')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.vehiculoService.findAll(page, limit);
    return reply.status(200).send(result);
  }

  @Get('/get-one-vehiculo/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('vehiculo_id') vehiculo_id: string
  ) {
    const result = await this.vehiculoService.findOne(+vehiculo_id);
    return reply.status(200).send(result);
  }

  @Put('/update-vehiculo/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('vehiculo_id') vehiculo_id: string,
    @Body() updateVehiculoDto: UpdateVehiculoDto
  ) {
    const result = await this.vehiculoService.update(+vehiculo_id, updateVehiculoDto);
    return reply.status(200).send(result);
  }

  @Delete('/delete-vehiculo/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('vehiculo_id') vehiculo_id: string
  ) {
    const result = await this.vehiculoService.remove(+vehiculo_id);
    return reply.status(200).send(result);
  }
}
