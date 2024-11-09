"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoRepository = /** @class */ (function () {
    function ProdutoRepository(repository) {
        this.repository = repository;
    }
    ProdutoRepository.prototype.cadastrarProduto = function (produto) {
        this.repository.save(produto);
    };
    ProdutoRepository.prototype.listar = function () {
        throw new Error("Method not implemented.");
    };
    ProdutoRepository.prototype.listarPorId = function (id) {
        throw new Error("Method not implemented.");
    };
    ProdutoRepository.prototype.excluirProduto = function (id) {
        throw new Error("Method not implemented.");
    };
    ProdutoRepository.prototype.consultarProduto = function (id) {
        throw new Error("Method not implemented.");
    };
    return ProdutoRepository;
}());
exports.default = ProdutoRepository;
