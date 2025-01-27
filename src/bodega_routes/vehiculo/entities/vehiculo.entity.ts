import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Vehiculo')
export class Vehiculo {

  @PrimaryGeneratedColumn('increment')
  vehiculo_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  marca: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  modelo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  patente: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  color: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  n_serie: string;

  @Column({ type: 'int', nullable: true })
  kilometraje: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  tipo_vehiculo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  f_customField01: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  f_customField02: string;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;
}
