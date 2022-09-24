import { CreateProductDTO } from "../dtos/create-product.dto";
import { PatchProductDTO } from "../dtos/patch-product.dto";
import { Product } from "../entities/product.entity";
import { errorResponse } from "../helpers/error-response";

import { HTTP_OK } from "../helpers/http-status-codes";
import { ControllerResponse } from "../interfaces/controller-response";
import { ProductService } from "../services/product.service";

export class ProductController {
  private readonly productService: ProductService

  constructor () {
    this.productService = new ProductService()
  }

  async getProducts(filters: any = null): Promise<Product[]> {
    return this.productService.getProducts(filters)
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product | ControllerResponse> {
    try {
      return this.productService.createProduct(createProductDTO)
    } catch (error) {
      return errorResponse(error)
    }
  }

  async patchProduct(id: string, patchProductDTO: PatchProductDTO): Promise<ControllerResponse> {
    try {
      await this.productService.patchProduct(id, patchProductDTO)
      return {
        status: HTTP_OK,
        response: { message: 'Product updated' }
      }
    } catch (error) {
      return errorResponse(error)
    }
  }

  async deleteProduct(id: string): Promise<ControllerResponse> {

    try {
      await this.productService.deleteProduct(id)

      return {
        status: HTTP_OK,
        response: { message: 'Product deleted' }
      }
    } catch (error) {
      return errorResponse(error)
    }
  }
}
