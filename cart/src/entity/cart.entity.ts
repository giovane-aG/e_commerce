import "reflect-metadata"
import { Entity, PrimaryColumn, Column, OneToOne } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Cart {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  @OneToOne(() =>  User, (user) => user.id)
  userId: string
}