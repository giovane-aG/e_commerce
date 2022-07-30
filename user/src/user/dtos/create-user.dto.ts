import { Injectable } from '@nestjs/common';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator'

@Injectable()
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Matches(
    /(?=^.{8,25}$)(?=(?:.*?\d){1})(?=.*[a-z])/, {
    message: 'Password is too weak'
  })
  password: string;

  @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
    message: 'CPF not valid'
  })
  cpf: string;
}
