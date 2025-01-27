import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('user') 
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'user_id' })
  user_id: number;

  @Column({ name: 'displayname', type: 'varchar', length: 50, nullable: true })
  displayname: string;

  @Column({ name: 'givenname', type: 'varchar', length: 50, nullable: true })
  givenname: string;

  @Column({ name: 'cargo_id', type: 'integer', nullable: true })
  cargo_id: number;

  @Column({ name: 'mobilephone', type: 'varchar', length: 50, nullable: true })
  mobilephone: string;

  @Column({ name: 'rut', type: 'varchar', length: 15, nullable: true })
  rut: string;

  @Column({ name: 'officelocation', type: 'varchar', length: 50, nullable: true })
  officelocation: string;

  @Column({ name: 'surname', type: 'varchar', length: 50, nullable: true })
  surname: string;

  @Column({ name: 'microsoft_id', type: 'varchar', length: 100, nullable: true })
  microsoft_id: string;

  @Column({ name: 'mail', type: 'varchar', length: 50, nullable: true })
  mail: string;

  @Column({ name: 'password', type: 'varchar', length: 15, nullable: true })
  password: string;

  @Column({ name: 'firma', type: 'bytea', nullable: true })
  firma: Buffer; // bytea type maps to a Buffer in TypeScript

  @Column({ name: 'created_at', type: 'date', default: () => 'CURRENT_DATE' })
  created_at: string;

  @Column({ name: 'updated_at', type: 'date', default: () => 'CURRENT_DATE' })
  updated_at: string;
}
