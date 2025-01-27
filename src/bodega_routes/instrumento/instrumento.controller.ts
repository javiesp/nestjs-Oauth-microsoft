import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Query } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Post('/create-instrumento')
  @UseGuards(AuthGuard('token-validation'))
  create(@Body() createInstrumentoDto: CreateInstrumentoDto) {
    return this.instrumentoService.create(createInstrumentoDto);
  }

  @Get('/get-all-instrumentos')
  @UseGuards(AuthGuard('token-validation'))
  findAll(@Query('page') page = 1, limit = 5) {
    return this.instrumentoService.findAll(page, limit);
  }

  @Get('/get-one-instrumento/:id')
  @UseGuards(AuthGuard('token-validation'))
  findOne(@Param('id') id: string) {
    return this.instrumentoService.findOne(+id);
  }

  @Put('/update-instrumento/:id')
  @UseGuards(AuthGuard('token-validation'))
  update(@Param('id') id: string, @Body() updateInstrumentoDto: UpdateInstrumentoDto) {
    return this.instrumentoService.update(+id, updateInstrumentoDto);
  }

  @Delete('/delete-instrumento/:id')
  @UseGuards(AuthGuard('token-validation'))
  remove(@Param('id') id: string) {
    return this.instrumentoService.remove(+id);
  }
}
