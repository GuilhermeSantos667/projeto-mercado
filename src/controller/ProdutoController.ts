import { Request, Response } from "express";
import ProdutoRepository from "../repositories/ProdutoRepository";
import ProdutoEntity from "../entities/ProdutoEntity";


export default class ProdutoController {

  constructor(private repository:ProdutoRepository){}

  async criaProduto(req: Request, res:Response){

    const {nome, quantidade} = <ProdutoEntity>req.body

    try {
      if (!nome || !quantidade) {
        return res.status(400).json({ message: "Faltando argumentos" });
      }
  
      const novoProduto = new ProdutoEntity(nome, quantidade)
  
      await this.repository.cadastrarProduto(novoProduto)
      return res.status(201).json({message: "produto cadastrado"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : "erro interno do servidor"})
        
    }
   

  }



}