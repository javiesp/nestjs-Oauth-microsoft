import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(page: number, limit: number): Promise<User[]> {
    const currentPage = page;
    const pageSize = limit;

    return await this.userRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { user_id: id } });
  }

  async findOneByMail(mail: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { mail: mail } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { user_id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
