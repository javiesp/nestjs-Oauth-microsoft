import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('permisos_cargo')
export class PermisosCargo {
  @PrimaryGeneratedColumn({ name: 'permisos_cargo_id' })
  permisos_cargo_id: number;

  @Column({ type: 'boolean' })
  p_leer: boolean;

  @Column({ type: 'boolean' })
  p_escribir: boolean;

  @Column({ type: 'boolean' })
  p_borrar: boolean;

  @Column({ type: 'boolean' })
  p_actualizar: boolean;

  @Column({ type: 'varchar', length: 50 })
  formulario: string;

  @Column({ type: 'int' })
  cargo_id: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: Date;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: Date;
}
