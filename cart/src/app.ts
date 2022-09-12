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
  return cartController.addProduct(request.body)
})

app.listen(5000, () => {
  console.log('App listening on 5000')
})


