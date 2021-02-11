"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errors_1 = require("../errors");
var errorHandler = function (err, _, res) {
    if (err instanceof errors_1.CustomError) {
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
        return;
    }
    console.error(err);
    res.status(400).send({
        errors: [
            {
                message: "Something went wrong",
            },
        ],
    });
};
exports.errorHandler = errorHandler;
