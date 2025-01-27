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
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { AuthGuard } from '@nestjs/passport';
import { FastifyReply } from 'fastify';
import { Res } from '@nestjs/common';

@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Post('/create-cargo')
  @UseGuards(AuthGuard('token-validation'))
  async create(
    @Res() reply: FastifyReply,
    @Body() createCargoDto: CreateCargoDto
  ) {
    const result = await this.cargoService.create(createCargoDto);
    return reply.status(HttpStatus.CREATED).send(result);
  }

  @Get('/get-cargos')
  @UseGuards(AuthGuard('token-validation'))
  async findAll(
    @Res() reply: FastifyReply,
    @Query('page') page = 1,
    @Query('limit') limit = 5
  ) {
    const result = await this.cargoService.findAll(page, limit);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Get('/get-cargos-by-id/:cargo_id')
  @UseGuards(AuthGuard('token-validation'))
  async findOne(
    @Res() reply: FastifyReply,
    @Param('cargo_id') cargo_id: string
  ) {
    const result = await this.cargoService.findOne(+cargo_id);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Put('/update-cargo/:cargo_id')
  @UseGuards(AuthGuard('token-validation'))
  async update(
    @Res() reply: FastifyReply,
    @Param('cargo_id') cargo_id: string,
    @Body() updateCargoDto: UpdateCargoDto
  ) {
    const result = await this.cargoService.update(+cargo_id, updateCargoDto);
    return reply.status(HttpStatus.OK).send(result);
  }

  @Delete('/delete-cargo/:cargo_id')
  @UseGuards(AuthGuard('token-validation'))
  async remove(
    @Res() reply: FastifyReply,
    @Param('cargo_id') cargo_id: string
  ) {
    const result = await this.cargoService.remove(+cargo_id);
    return reply.status(HttpStatus.OK).send(result);
  }
}