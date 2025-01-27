import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards, Put, Res, HttpStatus } from '@nestjs/common';
import { RespuestaFormularioService } from './respuesta_formulario.service';
import { CreateRespuestaFormularioDto } from './dto/create-respuesta_formulario.dto';
import { UpdateRespuestaFormularioDto } from './dto/update-respuesta_formulario.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify/fastify';

@Controller('respuesta-formulario')
export class RespuestaFormularioController {
  constructor(private readonly respuestaFormularioService: RespuestaFormularioService) {}

  @Post('/create-respuesta')
  @UseGuards(AuthGuard('token-validation'))
  create(@Body() createRespuestaFormularioDto: CreateRespuestaFormularioDto) {
    return this.respuestaFormularioService.create(createRespuestaFormularioDto);
  }

  @Get('/get-all-respuestas')
  @UseGuards(AuthGuard('token-validation'))
  findAll(@Query('page') page = 1, @Query('limit') limit = 5) {
    return this.respuestaFormularioService.findAll(page, limit);
  }

  @Get('/get-one-respuesta/:id')
  @UseGuards(AuthGuard('token-validation'))
  findOne(@Param('id') id: string) {
    return this.respuestaFormularioService.findOne(+id);
  }

  @Get('/get-one-respuesta-by-formID')
  @UseGuards(AuthGuard('token-validation'))
  async findByFormID(
    @Res() reply: FastifyReply,
    @Query('formulario_id') formulario_id: string,
    @Query('page') page = 1, 
    @Query('limit') limit = 5
  ) {
    const result = await this.respuestaFormularioService.findByFormID(formulario_id, page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }  

  @Get('/get-one-respuesta-by-userID')
  @UseGuards(AuthGuard('token-validation'))
  async findByUserID(
    @Res() reply: FastifyReply,
    @Query('formulario_id') formulario_id,
    @Query('user_id') user_id,
    @Query('page') page = 1, 
    @Query('limit') limit = 5
  ) {
    const result = await this.respuestaFormularioService.findByUserID(formulario_id, user_id, page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }  

  @Get('/get-one-respuesta-by-proyectoID')
  @UseGuards(AuthGuard('token-validation'))
  async findByProyectoID(
    @Res() reply: FastifyReply,
    @Query('formulario_id') formulario_id,
    @Query('proyecto_id') proyecto_id,
    @Query('page') page = 1, 
    @Query('limit') limit = 5
  ) {
    const result = await this.respuestaFormularioService.findByProyectoID(formulario_id, proyecto_id, page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }  

  @Put('/update-respuesta/:id')
  @UseGuards(AuthGuard('token-validation'))
  update(@Param('id') id: string, @Body() updateRespuestaFormularioDto: UpdateRespuestaFormularioDto) {
    return this.respuestaFormularioService.update(+id, updateRespuestaFormularioDto);
  }

  @Delete('/delete-respuesta/:id')
  @UseGuards(AuthGuard('token-validation'))
  remove(@Param('id') id: string) {
    return this.respuestaFormularioService.remove(+id);
  }
}
