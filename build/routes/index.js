"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produtoRouter_1 = __importDefault(require("./produtoRouter"));
var router = function (app) {
    app.use("/pets", produtoRouter_1.default);
};
exports.default = router;
