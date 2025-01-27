import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RespuestaFormulario } from '../../../respuesta_formulario/entities/respuesta_formulario.entity';

@Entity('c_solicitud_entrega_bodega')
export class CSolicitudBodega {
  @PrimaryGeneratedColumn({ name: 'seb_checklist_id' })
  seb_checklist_id: number;

  @Column({ type: 'date', nullable: true })
  fecha_solicitud: string;

  @Column({ type: 'date', nullable: true })
  fecha_entrega_equipo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  autorizado_por: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  estado: string;

  @ManyToOne(() => RespuestaFormulario, { nullable: true })
  @JoinColumn({ name: 'respuesta_formulario_id' })
  respuesta_formulario_id: RespuestaFormulario;
}
