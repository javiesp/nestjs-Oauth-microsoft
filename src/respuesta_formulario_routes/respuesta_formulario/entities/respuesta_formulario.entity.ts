import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Formulario } from '../../../formulario_routes/formulario/entities/formulario.entity'
import { User } from '../../../user_routes/user/entities/user.entity'
import { Vehiculo } from '../../../bodega_routes/vehiculo/entities/vehiculo.entity'
import { Instrumento } from '../../../bodega_routes/instrumento/entities/instrumento.entity'
import { Proyecto } from '../../../proyecto/proyecto/entities/proyecto.entity'
import { EstadoFormulario } from '../../../respuesta_formulario_routes/estado_formulario/entities/estado_formulario.entity'

@Entity('Respuesta_formulario')
export class RespuestaFormulario {
  
  @PrimaryGeneratedColumn('increment')
  respuesta_formulario_id: number;

  @ManyToOne(() => Formulario, { nullable: true })
  @JoinColumn({ name: 'formulario_id' })
  formulario_id: Formulario;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Vehiculo, { nullable: true })
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo_id: Vehiculo;

  @ManyToOne(() => Instrumento, { nullable: true })
  @JoinColumn({ name: 'Instrumento_id' })
  Instrumento_id: Instrumento;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
  fecha_respuesta: Date;

  @ManyToOne(() => Proyecto, { nullable: true })
  @JoinColumn({ name: 'proyecto_id' })
  proyecto_id: Proyecto;

  @ManyToOne(() => EstadoFormulario, { nullable: true })
  @JoinColumn({ name: 'estado_id' })
  estado_id: EstadoFormulario;
}
