import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { ProductController } from './controllers/product.controller'
import { CreateProductDTO } from './dtos/create-product.dto'
import { PatchProductDTO } from './dtos/patch-product.dto'

const productController = new ProductController()
console.clear()
const app = express()
app.use(express.json())

app.get('/products', async (request: Request, response: Response) => {
  const query = request.query
  const products = await productController.getProducts(query)

  response.status(200).json({ products })
})

app.post('/products', async (request: Request, response: Response) => {
  let createProductDto: CreateProductDTO = request.body
  await productController.createProduct(createProductDto)

  response.status(201).json({
    message: 'Product created'
  })
})

app.patch('/products/:id', async (request: Request, response: Response) => {
  const patchProductDto: PatchProductDTO = request.body
  const id = request.params.id
  const result = await productController.patchProduct(id, patchProductDto)

  response.status(result.status).json(result.response)
})

app.delete('/products/:id', async (request: Request, response: Response) => {
  const id = request.params.id
  const result = await productController.deleteProduct(id)

  response.status(result.status).json(result.response)
})

app.listen(6000, () => {
  console.log('App listening on 6000')
})