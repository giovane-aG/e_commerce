import { CreateProductDTO } from "../dtos/create-product.dto";
import { PatchProductDTO } from "../dtos/patch-product.dto";
import { Product } from "../entities/product.entity";

import NotFoundError from "../helpers/errors/not-found-error";
import { HTTP_INTERNAL_SERVER_ERROR, HTTP_OK } from "../helpers/http-status-codes";
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

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    return this.productService.createProduct(createProductDTO)
  }

  async patchProduct(id: string, patchProductDTO: PatchProductDTO): Promise<void> {
    this.productService.patchProduct(id, patchProductDTO)
  }

  async deleteProduct(id: string): Promise<ControllerResponse> {

    try {
      await this.productService.deleteProduct(id)

      return {
        status: HTTP_OK,
        response: { message: 'Product deleted' }
      }

    } catch (error) {

      let response: ControllerResponse = {
        status: HTTP_INTERNAL_SERVER_ERROR,
        response: { message: 'Internal Server Error' }
      }

      if (error instanceof NotFoundError) {
        response = {
          status: error.getStatusCode(),
          response: { message: error.getMessage() }
        }
      }

      return response
    }
  }
}
