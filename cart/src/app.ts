import 'reflect-metadata'
import express, { Request, Response } from 'express'

const app = express()

app.get('/carts', (request: Request, response: Response) => {
  response.send('hello')
})

app.listen(3000)