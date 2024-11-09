import { Repository } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
import InterfaceProduto from "./interfaces/InterfaceProduto";


export default class ProdutoRepository implements InterfaceProduto{

  constructor(private repository:Repository<ProdutoEntity>){}

  cadastrarProduto(produto:ProdutoEntity): void  {
    this.repository.save(produto)
  }
  listar(): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  listarPorId(id: number): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  excluirProduto(id: number): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  consultarProduto(id: number): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  
}