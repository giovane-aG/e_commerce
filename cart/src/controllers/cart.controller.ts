import { CartService } from '../services/cart.service'

export class CartController {

  private readonly cartService: CartService

  constructor () {
    this.cartService = this.cartService
  }

  
  async getUserCart(id: string) {
    return this.cartService.getUserCart(id)
  }
}