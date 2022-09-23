export interface HttpError {
  getStatusCode(): number
  getMessage(): string 
}