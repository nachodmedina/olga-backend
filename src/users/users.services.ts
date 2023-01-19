import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, User } from 'src/dto/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOneById(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    async create(request: CreateUserDto): Promise<User> {
        return await this.usersRepository.save(
            this.usersRepository.create({ ...request }),
        );
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
