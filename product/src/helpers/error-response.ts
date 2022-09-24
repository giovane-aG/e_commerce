import { ControllerResponse } from "../interfaces/controller-response"
import NotFoundError from "./errors/not-found-error"
import { HTTP_INTERNAL_SERVER_ERROR } from "./http-status-codes"

export const errorResponse = (error: any) => {
  
  let response: ControllerResponse = {
    status: HTTP_INTERNAL_SERVER_ERROR,
    response: { message: 'Internal Server Error' }
  }

  if (error instanceof NotFoundError) {
    response = {
      status: error.getStatusCode(),
      response: { message: error.getMessage() }
    }
  }

  return response
}