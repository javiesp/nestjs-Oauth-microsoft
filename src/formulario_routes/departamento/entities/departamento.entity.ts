import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('Departamento')
export class Departamento {
  @PrimaryGeneratedColumn()
  departamento_id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre_departamento: string;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @UpdateDateColumn({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;
}
