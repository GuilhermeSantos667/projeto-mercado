import express, { Request, Response } from "express";
import ProdutoRepository from "../repositories/ProdutoRepository";
import AppDataSource from "../config/dataSource";
import ProdutoController from "../controller/ProdutoController";
const router = express.Router();

const produtoRepository = new ProdutoRepository(AppDataSource.getRepository("ProdutoEntity"))
const produtoController = new ProdutoController(produtoRepository)


router.post("/", (req, res) => produtoController.criaProduto(req, res))
router.get("/", (req, res) => produtoController.listarProduto(req, res))
router.put("/:id", (req, res) => produtoController.editarQuantidade(req, res))
export default router