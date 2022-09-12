import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm'
import { Cart } from './cart.entity'

@Entity()
export class CartProduct {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  @ManyToOne(() => Cart)
  @JoinColumn({ name: 'id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_cart_id'})
  cartId: string

  @Column()
  productId: string
}
