import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common"
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR
    let message = "Internal Server Error"

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus()
      message = exception.message
    }

    response
      .status(statusCode)
      .json({
        statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        message
      })
  }

}