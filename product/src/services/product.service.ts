import { Repository } from "typeorm"
import { getAppDataSource } from '../data-source'
import { CreateProductDTO } from "../dtos/create-product.dto"
import { PatchProductDTO } from "../dtos/patch-product.dto"
import { Product } from "../entities/product.entity"

export class ProductService {

  private productRepository: Repository<Product>

  constructor () {
    getAppDataSource()
    .then(dataSource => {
      this.productRepository = dataSource.getRepository(Product)
    })
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
      throw new Error('No product with that id was found');
    }
  }

}
