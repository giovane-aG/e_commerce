import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { password, cpf, name, email } = createUserDto

    const salt = bcrypt.genSaltSync(8)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const newUser = {
      password: hashedPassword,
      cpf,
      email,
      name
    }

    await this.usersRepository.save(newUser)
  }

}
