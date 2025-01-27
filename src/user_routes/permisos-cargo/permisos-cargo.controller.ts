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
  HttpStatus
} from '@nestjs/common';
import { PermisosCargoService } from './permisos-cargo.service';
import { CreatePermisosCargoDto } from './dto/create-permisos-cargo.dto';
import { UpdatePermisosCargoDto } from './dto/update-permisos-cargo.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('permisos-cargo')
export class PermisosCargoController {
  constructor(private readonly permisosCargoService: PermisosCargoService) {}

  @Post('/create-permission')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Body() createPermisosCargoDto: CreatePermisosCargoDto,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.create(createPermisosCargoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-permissions')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(@Res() reply: FastifyReply) {
    const result = await this.permisosCargoService.findAll();
    return reply.send(result);
  }

  @Get('/get-permissions-by-form')
  @UseGuards(AuthGuard('token-validation'))
  async findAllByFormName(
    @Query('formulario') formulario: string,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.findAllByFormName(formulario);
    return reply.send(result);
  }

  @Get('/get-permissions-by-form-cargo')
  @UseGuards(AuthGuard('token-validation'))
  async findAllByNameAndCargo(
    @Query('formulario') formulario: string,
    @Query('cargo_id') cargo_id: string,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.findAllByNameAndCargo(
      formulario, 
      cargo_id
    );
    return reply.send(result);
  }

  @Get('/get-one/:id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Param('id') id: string,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.findOne(+id);
    return reply.send(result);
  }

  @Patch('/update-permission/:id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Param('id') id: string,
    @Body() updatePermisosCargoDto: UpdatePermisosCargoDto,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.update(+id, updatePermisosCargoDto);
    return reply.send(result);
  }

  @Delete('/delete-permission/:id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Param('id') id: string,
    @Res() reply: FastifyReply
  ) {
    const result = await this.permisosCargoService.remove(+id);
    return reply.status(HttpStatus.NO_CONTENT).send();
  }
}