import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  UseGuards, 
  Query, 
  HttpStatus, 
  Put, 
  Res 
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  // Crear un nuevo departamento
  @Post('/create-departamento')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createDepartamentoDto: CreateDepartamentoDto
  ) {
    const result = await this.departamentoService.create(createDepartamentoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  // Obtener todos los departamentos con paginación
  @Get('/get-departamentos')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.departamentoService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  // Obtener un departamento por su ID
  @Get('/get-departamento-by-id/:departamento_id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('departamento_id') departamento_id: string
  ) {
    const result = await this.departamentoService.findOne(+departamento_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  // Actualizar un departamento existente
  @Put('/update-departamento/:departamento_id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('departamento_id') departamento_id: string,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto
  ) {
    const result = await this.departamentoService.update(+departamento_id, updateDepartamentoDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  // Eliminar un departamento por su ID
  @Delete('/delete-departamento/:departamento_id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('departamento_id') departamento_id: string
  ) {
    const result = await this.departamentoService.remove(+departamento_id);
    return reply.status(HttpStatus.OK).send(result);
  }
}
