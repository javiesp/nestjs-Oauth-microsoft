import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity('Formulario')
export class Formulario {
  @PrimaryGeneratedColumn()
  formulario_id: number;

  @Column({ type: 'integer', nullable: true })
  tipo_formulario_id: number;

  @Column({ type: 'varchar', length: 25, nullable: true })
  codigo_formulario: string;

  @Column({ type: 'integer', nullable: true })
  revision: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nombre_form: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_creacion: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.departamento_id, { nullable: true })
  @JoinColumn({ name: 'departamento_id' })
  departamento: Departamento;  
}
