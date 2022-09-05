import { Repository } from "typeorm"
import { getAppDataSource } from '../data-source'
import { CreateProductDTO } from "../dtos/create-product.dto"
import { Product } from "../entities/product.entity"

export class ProductService {

  private productRepository: Repository<Product>

  constructor () {
    getAppDataSource()
    .then(dataSource => {
      this.productRepository = dataSource.getRepository(Product)
    })
  }

  async createProduct(createProductDTO: CreateProductDTO) {
    let { name, code } = createProductDTO
    const newProduct: Product = this.productRepository.create({
      code,
      name
    })

    return this.productRepository.save(newProduct)
  }

}
