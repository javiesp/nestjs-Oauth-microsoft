import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RespuestaFormulario } from '../../../respuesta_formulario/entities/respuesta_formulario.entity';

@Entity('c_solicitud_vehiculos_v1')
export class CSolicitudVehiculo {
  @PrimaryGeneratedColumn({ name: 'sv_checklist_id' })
  sv_checklist_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nombre_solicitante: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  cargo_solicitante: string;

  @Column({ type: 'date', nullable: true })
  fecha_solicitud: Date;

  @Column({ type: 'date', nullable: true })
  periodo_uso: Date;

  @Column({ type: 'date', nullable: true })
  periodo_termino: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  tipo_vehiculo: string;

  @Column({ type: 'varchar', length: 600, nullable: true })
  motivo_solicitud: string;

  @Column({ type: 'boolean', nullable: true })
  necesita_chofer: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true })
  conductor_nombre: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  conductor_asignado: string;

  @Column({ type: 'boolean', nullable: true })
  doc_al_dia: boolean;

  @Column({ type: 'boolean', nullable: true })
  autorizacion_empresa: boolean;

  @ManyToOne(() => RespuestaFormulario, { nullable: true })
  @JoinColumn({ name: 'respuesta_formulario_id' })
  respuesta_formulario_id: RespuestaFormulario;
}
