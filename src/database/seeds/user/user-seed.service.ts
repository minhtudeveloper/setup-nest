import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  async run() {
    console.log('====================================');
    console.log('++++++++++');
    console.log('====================================');
    await this.repository.save(
      this.repository.create({
        email: 'example@email.com',
        password: 'password123',
        full_name: 'John Doe',
      }),
    );
  }
}
