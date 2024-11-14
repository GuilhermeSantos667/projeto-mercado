import { Request, Response } from "express";
import ProdutoRepository from "../repositories/ProdutoRepository";
import ProdutoEntity from "../entities/ProdutoEntity";


export default class ProdutoController {

  constructor(private repository:ProdutoRepository){}

  async criaProduto(req: Request, res: Response) {
    const { nome, quantidade, valor } = req.body;

    if (!nome || !quantidade) {
      return res.status(400).json({ message: "Faltando argumentos" });
    }

    try {
      const novoProduto = new ProdutoEntity(nome, quantidade, valor);
      await this.repository.cadastrarProduto(novoProduto);
      return res.status(201).json({ message: "Produto cadastrado" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  async listarProduto(req: Request, res: Response) {
    try {
      const produtos = await this.repository.listar();
      return res.status(200).json(produtos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
  async listarProdutoPorId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const produto = await this.repository.listarPorId(Number(id));

      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(200).json(produto);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

  async editarQuantidade(req:Request, res:Response){
    const {id} = req.params
    const {quantidade, gerente} = req.body
    

    if(quantidade ===null && gerente === null){
      return res.status(400).json({ message: "Faltando argumentos" });
    }
    if (isNaN(Number(id))) {
      return res.status(400).json({ message: "ID inválido" });
    }
try {
    const produtoAlterar = await this.repository.editarQuantidade(Number(id), quantidade, gerente)
    if(!gerente){
      return res.status(404).json({message: "Apenas gerentes podem alterar quantidade de produto!"})
    }
    
  if(!produtoAlterar.success){
    return res.status(400).json({message: produtoAlterar.message})
  }
return res.status(200).json({message: produtoAlterar.message})

} catch (error) {
  console.log(error);
  return res.status(500).json({message: "Erro interno do servidor"})
  
}

  }
  async vendaProduto(req: Request, res:Response){

    const {nome} =<ProdutoEntity>req.body
    const {id} = req.params
  
    try {
      
    } catch (error) {
      
    }




  }


}