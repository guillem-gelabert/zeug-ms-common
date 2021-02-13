"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message) {
        super(message);
        // Restore prototype chain so that instanceof recognizes it as RequestValidationError
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.CustomError = CustomError;
