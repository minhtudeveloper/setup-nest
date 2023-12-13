import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('token')
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expired?: boolean;

  @Column()
  revoked?: boolean;

  @Column()
  token?: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}
