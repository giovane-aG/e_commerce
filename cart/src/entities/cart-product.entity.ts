import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm'
import { Cart } from './cart.entity'

@Entity('cart_product')
export class CartProduct {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  @ManyToOne(() =>  Cart, (cart) => cart.id)
  @JoinColumn()
  cartId: string

  @Column()
  productId: string
}