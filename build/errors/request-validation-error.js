"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
var custom_error_1 = require("./custom-error");
var RequestValidationError = /** @class */ (function (_super) {
    __extends(RequestValidationError, _super);
    function RequestValidationError(errors) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, "Invalid request parameters") || this;
        _this.errors = errors;
        _this.statusCode = 400;
        // Restore prototype chain so that instanceof recognizes it as RequestValidationError
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    RequestValidationError.prototype.serializeErrors = function () {
        return this.errors.map(function (err) {
            return { message: err.msg, field: err.param };
        });
    };
    return RequestValidationError;
}(custom_error_1.CustomError));
exports.RequestValidationError = RequestValidationError;
