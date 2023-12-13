import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity('absent_request')
export class AbsentRequest extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  from_date?: Date;

  @Column({ nullable: true })
  to_date?: Date;

  @Column({ nullable: true })
  ip_remote?: string;

  @Column({ nullable: true })
  reason?: string;

  @Column({ nullable: true })
  request_type?: string;

  @Column({ nullable: true })
  status?: string;

  @Column({ nullable: true })
  type?: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
