import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Materia } from '../../colegio/entities/materia.entity';
import { Notas } from '../../colegio/entities/notas.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '255' })
  nombre: string;

  @Column({ type: 'varchar', length: '255' })
  email: string;

  @Column({ type: 'varchar', length: '255' })
  password: string;

  @Column({ type: 'varchar', length: '255' })
  apellido: string;

  @Column({ type: 'int' })
  cedula: number;

  @Column({ type: 'varchar', length: '255' })
  rol: string;

  @OneToMany(() => Notas, (notas) => notas.user, { nullable: true })
  notas: Notas[];

  @ManyToMany(() => Materia, (materia) => materia.user)
  materia: Materia[];

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
