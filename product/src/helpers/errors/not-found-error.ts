import { HTTP_NOT_FOUND } from "../http-status-codes"
import { HttpError } from "./http-error"


class NotFoundError implements HttpError {

  private readonly message: string
  private readonly statusCode: number

  constructor(message: string) {
    this.message = message
    this.statusCode = HTTP_NOT_FOUND
  }

  getMessage(): string {
    return this.message
  }
  getStatusCode(): number {
    return this.statusCode
  }
}

export default NotFoundError