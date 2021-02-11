import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to database";

  constructor() {
    super("Couldn't connect to DB");

    // Restore prototype chain so that instanceof recognizes it as DatabaseConnectionError
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
