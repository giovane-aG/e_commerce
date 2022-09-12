import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm'
import { Cart } from './cart.entity'

@Entity()
export class CartProduct {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  cartId: string

  @Column()
  productId: string
}
