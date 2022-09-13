import { AddProductToCartDto } from '../dtos/add-product-to-cart.dto'
import { CartService } from '../services/cart.service'

export class CartController {

  private readonly cartService: CartService

  constructor () {
    this.cartService = new CartService()
  }

  async getUserCart(id: string) {
    return this.cartService.getUserCart(id)
  }

  async createUserCart(userId: string) {
    return this.cartService.createUserCart(userId)
  }

  async addProduct(addProductToCartDto: AddProductToCartDto): Promise<void> {
    this.cartService.addProduct(addProductToCartDto)
  }
}