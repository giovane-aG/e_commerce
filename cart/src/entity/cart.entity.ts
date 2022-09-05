import "reflect-metadata"
import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import { CartProduct } from "./cart-product.entity"
import { User } from './user.entity'

@Entity()
export class Cart {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  @OneToOne(() =>  User)
  @JoinColumn({ name: 'id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_user_id' })
  userId: string
}