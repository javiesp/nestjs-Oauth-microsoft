import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Cargo')
export class Cargo {

  @PrimaryGeneratedColumn({ name: 'cargo_id' })
  cargo_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nombre: string;

  @Column({ name: 'departamento_id', type: 'integer', nullable: true })
  departamento_id: number;

  @Column({ name: 'created_at', type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @Column({ name: 'updated_at', type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;

}
