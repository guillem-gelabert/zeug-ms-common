import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super("Route not found");

    // Restore prototype chain so that instanceof recognizes it as RequestValidationError
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found" }];
  }
}
