import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { User } from '../../users/entities/users.entity';

@Entity()
export class Notas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nota1: number;

  @Column({ type: 'int' })
  nota2: number;

  @Column({ type: 'int' })
  nota3: number;

  @OneToOne(() => User, (user) => user.notas, { nullable: true })
  user: User;

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
