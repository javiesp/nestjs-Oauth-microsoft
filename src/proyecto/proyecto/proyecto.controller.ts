import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  UseGuards, 
  Query,
  HttpStatus, 
  Put 
} from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post('/create-proyecto')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createProyectoDto: CreateProyectoDto
  ) {
    const result = await this.proyectoService.create(createProyectoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-proyectos')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.proyectoService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-proyecto-by-centro/')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByCentroID(
    @Res() reply: FastifyReply,
    @Query('centro_costo_id') centro_costo_id
  ) {
    const result = await this.proyectoService.findOneByCentroID(centro_costo_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-proyecto-by-tipo/')
  @UseGuards(AuthGuard('token-validation'))
  async findOneByTypeID(
    @Res() reply: FastifyReply,
    @Query('type_id') type_id
  ) {
    const result = await this.proyectoService.findOneByTypeID(type_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/update-proyecto/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('id') id: string,
    @Body() updateProyectoDto: UpdateProyectoDto
  ) {
    const result = await this.proyectoService.update(+id, updateProyectoDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-proyecto/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('id') id: string
  ) {
    const result = await this.proyectoService.remove(+id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
