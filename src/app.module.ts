import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { PermisosCargo } from './user_routes/permisos-cargo/entities/permisos-cargo.entity';
import { PermisosCargoModule } from './user_routes/permisos-cargo/permisos-cargo.module';
import { CargoModule } from './user_routes/cargo/cargo.module';
import { Cargo } from './user_routes/cargo/entities/cargo.entity';
import { UserModule } from './user_routes/user/user.module';
import { User } from './user_routes/user/entities/user.entity';
import { TipoProyecto } from './proyecto/tipo_proyecto/entities/tipo_proyecto.entity';
import { TipoProyectoModule } from './proyecto/tipo_proyecto/tipo_proyecto.module';
import { CentroCostoModule } from './proyecto/centro_costo/centro_costo.module';
import { CentroCosto } from './proyecto/centro_costo/entities/centro_costo.entity';
import { ProyectoModule } from './proyecto/proyecto/proyecto.module';
import { Proyecto } from './proyecto/proyecto/entities/proyecto.entity';
import { DepartamentoModule } from './formulario_routes/departamento/departamento.module';
import { Departamento } from './formulario_routes/departamento/entities/departamento.entity';
import { Formulario } from './formulario_routes/formulario/entities/formulario.entity';
import { FormularioModule } from './formulario_routes/formulario/formulario.module';
import { HistorialFormulario } from './formulario_routes/historial_formulario/entities/historial_formulario.entity';
import { HistorialFormularioModule } from './formulario_routes/historial_formulario/historial_formulario.module';
import { InstrumentoModule } from './bodega_routes/instrumento/instrumento.module';
import { Instrumento } from './bodega_routes/instrumento/entities/instrumento.entity';
import { VehiculoDocLegalModule } from './bodega_routes/vehiculo_doc_legal/vehiculo_doc_legal.module';
import { VehiculoModule } from './bodega_routes/vehiculo/vehiculo.module';
import { Vehiculo } from './bodega_routes/vehiculo/entities/vehiculo.entity';
import { VehiculoDocLegal } from './bodega_routes/vehiculo_doc_legal/entities/vehiculo_doc_legal.entity';
import { EstadoFormularioModule } from './respuesta_formulario_routes/estado_formulario/estado_formulario.module';
import { EstadoFormulario } from './respuesta_formulario_routes/estado_formulario/entities/estado_formulario.entity';
import { RespuestaFormularioModule } from './respuesta_formulario_routes/respuesta_formulario/respuesta_formulario.module';
import { RespuestaFormulario } from './respuesta_formulario_routes/respuesta_formulario/entities/respuesta_formulario.entity';
import { CSolicitudVehiculoModule } from './respuesta_formulario_routes/checklist/c_solicitud_vehiculo/c_solicitud_vehiculo.module';
import { CSolicitudVehiculo } from './respuesta_formulario_routes/checklist/c_solicitud_vehiculo/entities/c_solicitud_vehiculo.entity';
import { CSolicitudBodega } from './respuesta_formulario_routes/checklist/c_solicitud_bodega/entities/c_solicitud_bodega.entity';
import { CSolicitudBodegaModule } from './respuesta_formulario_routes/checklist/c_solicitud_bodega/c_solicitud_bodega.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.BD_HOST,
      port: 5432,
      password: process.env.PASSWORD,
      username: 'postgres',
      entities: [PermisosCargo, Cargo, User, TipoProyecto, CentroCosto, Proyecto, Departamento, Formulario, HistorialFormulario, Instrumento, Vehiculo, VehiculoDocLegal, EstadoFormulario, RespuestaFormulario, CSolicitudVehiculo, CSolicitudBodega],
      database: process.env.DATABASE,
      synchronize: true,
      logging: true,
    }),
    PermisosCargoModule,
    CargoModule,
    UserModule,
    TipoProyectoModule,
    CentroCostoModule,
    ProyectoModule,
    DepartamentoModule,
    FormularioModule,
    HistorialFormularioModule, 
    InstrumentoModule,
    VehiculoDocLegalModule,
    VehiculoModule,
    EstadoFormularioModule,
    RespuestaFormularioModule,
    CSolicitudVehiculoModule,
    CSolicitudBodegaModule,
    AuthModule,
  ],
})
export class AppModule {}
