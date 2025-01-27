import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Res, HttpStatus, Put } from '@nestjs/common';
import { HistorialFormularioService } from './historial_formulario.service';
import { CreateHistorialFormularioDto } from './dto/create-historial_formulario.dto';
import { UpdateHistorialFormularioDto } from './dto/update-historial_formulario.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';

@Controller('historial-formulario')
export class HistorialFormularioController {
  constructor(private readonly historialFormularioService: HistorialFormularioService) {}

  @Post('/create-historial')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply, 
    @Body() createHistorialFormularioDto: CreateHistorialFormularioDto
  ) {
    const result = await this.historialFormularioService.create(createHistorialFormularioDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-historial')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply, 
    @Query('page') page = 1, 
    @Query('limit') limit = 5
  ) {
    const result = await this.historialFormularioService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-one-historial/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply, 
    @Param('id') id: string
  ) {
    const result = await this.historialFormularioService.findOne(+id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/udpate-historial/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply, 
    @Param('id') id: string, 
    @Body() updateHistorialFormularioDto: UpdateHistorialFormularioDto
  ) {
    const result = await this.historialFormularioService.update(+id, updateHistorialFormularioDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-historial/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply, 
    @Param('id') id: string
  ) {
    const result = await this.historialFormularioService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
