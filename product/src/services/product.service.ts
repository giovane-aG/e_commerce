import { Repository } from "typeorm"
import { getAppDataSource } from '../data-source'
import { CreateProductDTO } from "../dtos/create-product.dto"
import { PatchProductDTO } from "../dtos/patch-product.dto"
import { Product } from "../entities/product.entity"

import NotFoundError from "../helpers/errors/not-found-error"

export class ProductService {

  private productRepository: Repository<Product>

  constructor () {
    getAppDataSource()
    .then(dataSource => {
      this.productRepository = dataSource.getRepository(Product)
    })
  }

  async getProducts(filters = null): Promise<Product[]> {
    if (filters) {
      return this.getProductsWithFilters(filters)
    }

    return this.getAllProducts()
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find()
  }

  async getProductsWithFilters(filters: any): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder()
    queryBuilder.select('*')

    if (filters.name) {
      queryBuilder.where('name like :name', { name: `%${filters.name}%` })
    }

    if (filters.code) {
      queryBuilder.andWhere({ code: filters.code })
    }

    return queryBuilder.execute()
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    let { name, code } = createProductDTO
    const newProduct: Product = this.productRepository.create({
      code,
      name
    })

    return this.productRepository.save(newProduct)
  }

  async patchProduct(id: string, patchProductDTO: PatchProductDTO): Promise<void> {
    const result = await this.productRepository.update({ id }, patchProductDTO)

    if (!result.affected) {
      throw new NotFoundError('No product with that id was found')
    }
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await this.productRepository.delete(id)

    if (!result.affected) {
      throw new NotFoundError('No product with that id was found')
    }
  }

}
