"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ProdutoRepository_1 = __importDefault(require("../repositories/ProdutoRepository"));
var dataSource_1 = __importDefault(require("../config/dataSource"));
var ProdutoController_1 = __importDefault(require("../controller/ProdutoController"));
var router = express_1.default.Router();
var produtoRepository = new ProdutoRepository_1.default(dataSource_1.default.getRepository("ProdutoEntity"));
var produtoController = new ProdutoController_1.default(produtoRepository);
router.post("/", function (req, res) { return produtoController.criaProduto(req, res); });
exports.default = router;
