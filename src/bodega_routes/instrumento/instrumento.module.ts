import { Module } from '@nestjs/common';
import { InstrumentoService } from './instrumento.service';
import { InstrumentoController } from './instrumento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrumento } from './entities/instrumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instrumento])],
  controllers: [InstrumentoController],
  providers: [InstrumentoService],
  exports: [TypeOrmModule],
})
export class InstrumentoModule {}
