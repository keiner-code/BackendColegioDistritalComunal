import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Materia } from './materia.entity';
import { Curso } from './curso.entity';

@Entity()
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  dia: string;

  @Column({ type: 'varchar' })
  horaInicio: string;

  @Column({ type: 'varchar' })
  horaFin: string;

  @ManyToOne(() => Materia, (materia) => materia.horario)
  materia: Materia;

  @OneToOne(() => Curso, (curso) => curso.horario)
  @JoinColumn()
  curso: Curso;

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
