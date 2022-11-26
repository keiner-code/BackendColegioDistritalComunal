import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Horario } from './horario.entity';
import { User } from '../../users/entities/users.entity';

@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  materia: string;

  @Column({ type: 'text' })
  descripcion: string;

  @OneToMany(() => Horario, (horario) => horario.materia)
  horario: Horario[];

  @ManyToMany(() => User, (user) => user.materia)
  @JoinTable()
  user: User[];

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
