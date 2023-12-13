import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity('users')
export class User extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, unique: true, nullable: true })
  email: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ nullable: true })
  bank_account_no: string;

  @Column({ nullable: true })
  branch?: string;

  @Column({ nullable: true })
  citizen_identity_issue_at?: string;

  @Column({ nullable: true })
  citizen_identity_issue_date?: Date;

  @Column({ nullable: true })
  citizen_identity_no?: string;

  @Column({ nullable: true })
  contract_expiry_date?: Date;

  @Column({ nullable: true })
  contract_first_sign_date?: Date;

  @Column({ nullable: true })
  contractnda?: string;

  @Column({ nullable: true })
  contract_no?: string;

  @Column({ nullable: true })
  contract_note?: string;

  @Column({ nullable: true })
  contract_sign_date?: Date;

  @Column({ nullable: true })
  contract_status?: string;

  @Column({ nullable: true })
  contract_type?: string;

  @Column({ nullable: true })
  current_address?: string;

  @Column({ nullable: true })
  day_of_birth?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  department_group?: string;

  @Column({ nullable: true })
  employee_group?: string;

  @Column({ nullable: true })
  employee_id?: string;

  @Column({ nullable: true })
  full_name?: string;

  @Column({ nullable: true })
  gender?: number;

  @Column({ nullable: true })
  job_level?: string;

  @Column({ nullable: true })
  job_title?: string;

  @Column({ nullable: true })
  num_of_dependent?: string;

  @Column({ nullable: true })
  onboard_date?: string;

  @Column({ nullable: true })
  phone_no?: string;

  @Column({ nullable: true })
  place_of_origin?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    console.log('====================================');
    console.log('ahihihihi', bcrypt);
    console.log('====================================');
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deleted: Date;
}
