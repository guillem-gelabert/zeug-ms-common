"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super("Route not found");
        this.statusCode = 404;
        // Restore prototype chain so that instanceof recognizes it as RequestValidationError
        Object.setPrototypeOf(this, new.target.prototype);
    }
    serializeErrors() {
        return [{ message: "Not Found" }];
    }
}
exports.NotFoundError = NotFoundError;
