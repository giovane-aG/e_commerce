import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { ProductController } from './controllers/product.controller'
import { CreateProductDTO } from './dtos/create-product.dto'
import { PatchProductDTO } from './dtos/patch-product.dto'

const productController = new ProductController()

const app = express()
app.use(express.json())

app.post('/products', async (request: Request, response: Response) => {
  let createProductDto: CreateProductDTO = request.body
  return productController.createProduct(createProductDto)
})

app.patch('/product/:id', async (request: Request, response: Response) => {
  const patchProductDto: PatchProductDTO = request.body
  const id = request.params.id
  return productController.patchProduct(id, patchProductDto)
})
