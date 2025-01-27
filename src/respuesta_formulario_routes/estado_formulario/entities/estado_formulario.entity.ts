import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estado_formulario')
export class EstadoFormulario {
  @PrimaryGeneratedColumn({ name: 'estado_id' })
  estado_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'estado' })
  estado: string;
}