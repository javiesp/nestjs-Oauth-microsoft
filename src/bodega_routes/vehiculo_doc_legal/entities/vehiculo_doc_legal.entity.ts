import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity';

@Entity('Vehiculo_doc_legal')
export class VehiculoDocLegal {
  @PrimaryGeneratedColumn({ name: 'doc_legal_id' })
  doc_legal_id: number;

  @Column({ name: 'venc_permiso_circulacion', type: 'date', nullable: true })
  venc_permiso_circulacion: string;

  @Column({ name: 'venc_revision_tecnica', type: 'date', nullable: true })
  venc_revision_tecnica: string;

  @ManyToOne(() => Vehiculo, vehiculo => vehiculo.vehiculo_id)
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo_id: Vehiculo;
}
