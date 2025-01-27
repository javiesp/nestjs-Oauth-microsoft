import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Tipo_proyecto')
export class TipoProyecto extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'type_id' })
  type_id: number;

  @Column({ name: 'tipo_proyecto', type: 'varchar', nullable: true })
  tipo_proyecto: string;
}
