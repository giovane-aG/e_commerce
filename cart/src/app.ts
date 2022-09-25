import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { CartController } from './controllers/cart.controller'

const cartController = new CartController()

const app = express()
app.use(express.json())

app.get('/carts/:userId', async (request: Request, response: Response) => {
  const { userId } = request.params
  const cart = await cartController.getUserCart(userId)
  response.status(200).json(cart)
})

app.get('/carts/:cartId/products', async (request: Request, response: Response) => {
  const { cartId } = request.params
  const cartProducts = await cartController.getCartProducts(cartId)
  response.status(200).json(cartProducts)
})

app.delete('/carts/:cartId/products/:productId', async (request: Request, response: Response) => {
  const { productId } = request.params
  await cartController.deleteCartProduct(productId)
  response.status(200).json({
    message: "product removed from cart"
  })
})

app.post('/carts', async (request: Request, response: Response) => {
  try {
    const { userId } = request.body
    await cartController.createUserCart(userId)
    response.status(201).json({ message: 'Cart created successfully' })
  } catch (error: any) {
    response.status(400).json({error})
  }
})

app.post('/carts/product', async (request: Request, response: Response) => {
  await cartController.addProduct(request.body)
  response.status(201).json({ message: 'product added to cart' })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})

