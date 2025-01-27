import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Res, Query, HttpStatus } from '@nestjs/common';
import { CentroCostoService } from './centro_costo.service';
import { CreateCentroCostoDto } from './dto/create-centro_costo.dto';
import { UpdateCentroCostoDto } from './dto/update-centro_costo.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';

@Controller('centro-costo')
export class CentroCostoController {
  constructor(private readonly centroCostoService: CentroCostoService) {}

  @Post('/create-centro')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createCentroCostoDto: CreateCentroCostoDto
  ) {
    const result = await this.centroCostoService.create(createCentroCostoDto);
    return reply.status(HttpStatus.CREATED).send(result); // Respondemos con Fastify
  }

  @Get('/get-all-centros')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.centroCostoService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result); // Respondemos con Fastify
  }

  @Get('/get-one-centro/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.centroCostoService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result); // Respondemos con Fastify
  }

  @Put('/update-centro/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateCentroCostoDto: UpdateCentroCostoDto
  ) {
    const result = await this.centroCostoService.update(+id, updateCentroCostoDto);
    return reply.status(HttpStatus.OK).send(result); // Respondemos con Fastify
  }

  @Delete('/delete-centro/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.centroCostoService.remove(+id);
    return reply.status(HttpStatus.OK).send(result); // Respondemos con Fastify
  }
}