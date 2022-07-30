import { Repository } from "typeorm"
import { AddProductToCartDto } from "../dtos/add-product-to-cart.dto"
import { CartProduct } from "../entities/cart-product.entity"
import { Cart } from "../entities/cart.entity"
import { AppDataSource } from '../repository/database'

export class CartService {
  constructor (
    private readonly cartRepository: Repository<Cart>,
    private readonly cartProductRepository: Repository<CartProduct>
  ) {
    this.cartRepository = AppDataSource.getRepository(Cart)
    this.cartProductRepository = AppDataSource.getRepository(CartProduct)
  }

  createUserCart(userId: string) {
    this.cartRepository.save({
      userId
    })
  }
  
  getUserCart(id: string) {
    return this.cartRepository.findOne({
      where: {
        userId: id
      }
    })
  }

  addProduct(addProductToCartDto: AddProductToCartDto) {
    const { quantity, productId, cartId } = addProductToCartDto
    
    if (quantity > 0) {

      for (let i = 1; i <= quantity; ++i) {
        const newCartProduct = this.cartProductRepository.create({
          cartId,
          productId
        })

        this.cartProductRepository.save(newCartProduct)
      }
    }
  }
}
