import { Repository } from "typeorm"
import { AddProductToCartDto } from "../dtos/add-product-to-cart.dto"
import { CartProduct } from "../entity/cart-product.entity"
import { Cart } from "../entity/cart.entity"
import { getAppDataSource } from '../data-source'

export class CartService {

  private cartRepository: Repository<Cart>
  private cartProductRepository: Repository<CartProduct>

  constructor () {
    getAppDataSource()
    .then(dataSource => {

      this.cartRepository = dataSource.getRepository(Cart)
      this.cartProductRepository = dataSource.getRepository(CartProduct)
    })
  }

  createUserCart(userId: string) {
    return this.cartRepository.save({
      userId
    })
  }

  async getUserCart(id: string) {
    let cart = await this.cartRepository.findOne({
      where: {
        userId: id
      }
    })

    if (!cart) {
      return this.createUserCart(id)
    }

    return cart
  }

  async addProduct(addProductToCartDto: AddProductToCartDto): Promise<void> {
    let { quantity, productId, cartId } = addProductToCartDto

    quantity = 1 || quantity

    for (let i = 1; i <= quantity; ++i) {
      const newCartProduct = this.cartProductRepository.create({
        cartId,
        productId
      })

      await this.cartProductRepository.save(newCartProduct)
    }
  }

  async getCartProducts(cartId: string): Promise<CartProduct[]> {
    return this.cartProductRepository.find({ where: { cartId } })
  }

  async deleteCartProduct(cartId: string): Promise<void> {
    this.cartProductRepository.delete({ id: cartId })
  }
}
