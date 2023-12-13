import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { AbsentRequest } from 'src/modules/absentRequest/entities/user.entity';

@Entity('absent_approval')
export class AbsentApproval extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  approval_date?: Date;

  @Column({ nullable: true })
  approval_order?: number;

  @Column({ nullable: true })
  approval_id?: string;

  @Column({ nullable: true })
  note?: string;

  @Column({ nullable: true })
  status?: string;

  @ManyToOne(() => AbsentRequest, {
    eager: true,
  })
  @JoinColumn({ name: 'absent_request_id' })
  absent_request_id?: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
