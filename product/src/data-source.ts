import { DataSource } from 'typeorm'
import { Product } from './entities/product.entity' 

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "product",
  entities: [Product],
  synchronize: true,
  subscribers: [],
  migrations: [],
})

export const getAppDataSource = async () => {
  await AppDataSource.initialize()
  return AppDataSource
}

