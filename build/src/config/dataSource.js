"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var ProdutoEntity_1 = __importDefault(require("../entities/ProdutoEntity"));
var FuncionarioEntity_1 = __importDefault(require("../entities/FuncionarioEntity"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [ProdutoEntity_1.default, FuncionarioEntity_1.default],
    synchronize: true
});
exports.default = exports.AppDataSource;
