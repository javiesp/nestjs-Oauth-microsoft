import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, HttpStatus, Put } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post('/create-formulario')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createFormularioDto: CreateFormularioDto
  ) {
    const result = await this.formularioService.create(createFormularioDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-formularios')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.formularioService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-formulario-by-name/')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByDepartamentoID(
    @Res() reply: FastifyReply,
    @Query('nombre_form') nombre_form
  ) {
    const result = await this.formularioService.findOneByName(nombre_form);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-formulario-by-departamento/')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByDepID(
    @Res() reply: FastifyReply,
    @Query('departamento_id') departamento_id
  ) {
    const result = await this.formularioService.findOneByDepID(departamento_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  // @Get('/get-formulario-by-tipo/')
  // @UseGuards(AuthGuard('token-validation'))
  // async findOneByTipoID(
  //   @Res() reply: FastifyReply,
  //   @Query('tipo_formulario_id') tipo_formulario_id
  // ) {
  //   const result = await this.formularioService.findOneByTipoID(tipo_formulario_id);
  //   return reply.status(HttpStatus.OK).send(result);
  // }

  @Put('/update-formulario/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateFormularioDto: UpdateFormularioDto
  ) {
    const result = await this.formularioService.update(+id, updateFormularioDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-formulario/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.formularioService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
