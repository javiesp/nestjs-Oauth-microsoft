import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Formulario } from '../../formulario/entities/formulario.entity'; // Asegúrate de importar la entidad correcta

@Entity('historial_formulario')
export class HistorialFormulario {

  @PrimaryGeneratedColumn()
  historial_id: number;

  @ManyToOne(() => Formulario, (formulario) => formulario.formulario_id, { nullable: true })
  @JoinColumn({ name: 'formulario_id' })
  formulario: Formulario;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha_modificacion: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  descripcion_cambio: string;
}
