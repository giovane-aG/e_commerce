import { Body, Controller, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from 'src/http-exception.filter'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserService } from './user.service'

@Controller('user')
@UsePipes(ValidationPipe)
export class UserController {

  constructor(
    private readonly userService: UserService
  ) {}
  
  @Post()
  async signUp(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(createUserDto)
  }
}
