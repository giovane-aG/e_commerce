import { DataSource } from 'typeorm'
import { CartProduct } from '../entities/cart-product.entity'
import { Cart } from '../entities/cart.entity'
import { User } from '../entities/user.entity'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cart",
  entities: [Cart, User, CartProduct],
  subscribers: [],
  migrations: [],
})