import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { User } from '../entities/user.entity'

@Entity('cart')
export class Cart {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  @OneToOne(() =>  User, (user) => user.id)
  userId: string
}