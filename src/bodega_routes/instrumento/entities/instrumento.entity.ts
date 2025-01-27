import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Instrumento')
export class Instrumento {
  @PrimaryGeneratedColumn('increment')
  Instrumento_id: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  marca: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  modelo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  n_serie: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  v_customField01: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  v_customField02: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  v_customField03: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  v_customField04: string;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;
}
