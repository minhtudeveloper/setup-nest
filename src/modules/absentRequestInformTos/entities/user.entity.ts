import { AbsentRequest } from 'src/modules/absentRequest/entities/user.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';

@Entity('absent_request_inform_tos')
export class AbsentRequestInformTos extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AbsentRequest, {
    eager: true,
  })
  @JoinColumn({ name: 'absent_request_id' })
  absent_request_id?: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'inform_to_id' })
  inform_to_id?: string;
}
