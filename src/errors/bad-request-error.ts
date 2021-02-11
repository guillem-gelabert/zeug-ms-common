import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);

    // Restore prototype chain so that instanceof recognizes it as RequestValidationError
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
