"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var errors_1 = require("../errors");
var requireAuth = function (req, _, next) {
    if (!req.currentUser) {
        throw new errors_1.NotAuthorizedError();
    }
    next();
};
exports.requireAuth = requireAuth;
