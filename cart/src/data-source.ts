import { DataSource } from 'typeorm'
import { CartProduct } from './entity/cart-product.entity'
import { Cart } from './entity/cart.entity'
import { User } from './entity/user.entity'

const AppDataSource = new DataSource({
  type: "postgres",
  host: "172.21.0.3",
  port: 5001,
  username: "postgres",
  password: "postgres",
  database: "cart",
  entities: [Cart, User, CartProduct],
  synchronize: true,
  subscribers: [],
  migrations: [],
})

export const getAppDataSource = async () => {
  await AppDataSource.initialize()
  return AppDataSource
}

