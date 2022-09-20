import { CreateProductDTO } from "../dtos/create-product.dto";
import { PatchProductDTO } from "../dtos/patch-product.dto";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";

export class ProductController {
  private readonly productService: ProductService

  constructor () {
    this.productService = new ProductService()
  }

  async getProducts(filters: any = null): Promise<Product[]> {
    return this.productService.getProducts(filters)
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    return this.productService.createProduct(createProductDTO)
  }

  async patchProduct(id: string, patchProductDTO: PatchProductDTO): Promise<void> {
    this.productService.patchProduct(id, patchProductDTO)
  }
}
