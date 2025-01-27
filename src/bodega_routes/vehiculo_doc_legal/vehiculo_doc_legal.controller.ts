import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, HttpStatus } from '@nestjs/common';
import { VehiculoDocLegalService } from './vehiculo_doc_legal.service';
import { CreateVehiculoDocLegalDto } from './dto/create-vehiculo_doc_legal.dto';
import { UpdateVehiculoDocLegalDto } from './dto/update-vehiculo_doc_legal.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('vehiculo-doc-legal')
export class VehiculoDocLegalController {
  constructor(private readonly vehiculoDocLegalService: VehiculoDocLegalService) {}

  @Post('/create-doclegal')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createVehiculoDocLegalDto: CreateVehiculoDocLegalDto
  ) {
    const result = await this.vehiculoDocLegalService.create(createVehiculoDocLegalDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-all-doclegal')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.vehiculoDocLegalService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-doc/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.vehiculoDocLegalService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Patch('/update-doclegal:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateVehiculoDocLegalDto: UpdateVehiculoDocLegalDto
  ) {
    const result = await this.vehiculoDocLegalService.update(+id, updateVehiculoDocLegalDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-doclegal:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.vehiculoDocLegalService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}