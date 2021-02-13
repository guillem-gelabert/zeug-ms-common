"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseConnectionError extends custom_error_1.CustomError {
    constructor() {
        super("Couldn't connect to DB");
        this.statusCode = 500;
        this.reason = "Error connecting to database";
        // Restore prototype chain so that instanceof recognizes it as DatabaseConnectionError
        Object.setPrototypeOf(this, new.target.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
