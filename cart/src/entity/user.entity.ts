import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm'
import { Cart } from './cart.entity';

@Entity('user')
export class User  {
  @PrimaryColumn({ generated: 'uuid' })
  id: string

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  @OneToOne(() => Cart, (cart) => cart.id)
  cart: string;
}
