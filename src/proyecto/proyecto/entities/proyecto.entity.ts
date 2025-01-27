import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoProyecto } from '../../tipo_proyecto/entities/tipo_proyecto.entity';  // Asegúrate de importar la entidad correcta
import { CentroCosto } from '../../centro_costo/entities/centro_costo.entity';

@Entity('Proyecto')
export class Proyecto {
  @PrimaryGeneratedColumn()
  proyecto_id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre_proyecto: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  descripcion: string;

  @Column({ type: 'date', nullable: true })
  fecha_ini: string;

  @Column({ type: 'date', nullable: true })
  fecha_cierre: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;

  @ManyToOne(() => TipoProyecto, (tipoProyecto) => tipoProyecto.type_id)
  @JoinColumn({ name: 'type_id' })
  type_id: TipoProyecto;

  @ManyToOne(() => CentroCosto, (centroCosto) => centroCosto.centro_costo_id)
  @JoinColumn({ name: 'centro_costo_id' })
  centro_costo_id: CentroCosto;
}
