import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Centro_costo')
export class CentroCosto extends BaseEntity {
  
  @PrimaryGeneratedColumn({ name: 'centro_costo_id' })
  centro_costo_id: number;

  @Column({ name: 'nombre_centro', type: 'varchar', length: 50 })
  nombre_centro: string;

  @Column({ name: 'cuenta_analitica_id', type: 'varchar', nullable: true })
  cuenta_analitica_id: string;

  @Column({ name: 'balance', type: 'integer', nullable: true })
  balance: number;

}
