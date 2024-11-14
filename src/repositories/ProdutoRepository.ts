import { Repository } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
import InterfaceProduto from "./interfaces/InterfaceProduto";


export default class ProdutoRepository implements InterfaceProduto{

  constructor(private repository:Repository<ProdutoEntity>){}
 

  cadastrarProduto(produto:ProdutoEntity): void  {
    this.repository.save(produto)
  }
  async listar():Promise<ProdutoEntity[]> {

    return await this.repository.find()
  }
   async listarPorId(id: number): Promise<{ success: boolean; message?: string }> {
    const produto = await this.repository.findOne({ where: { id } });

    if (!produto) {
      return { success: false, message: "Produto não encontrado" };
    }

    return { success: true };
  }
  async editarQuantidade(id: number, quantidade:number, gerente:boolean): Promise<{ success: boolean; message?: string; }> {
    const produtoProcurado = await this.repository.findOne({ where: { id } });
    if (!produtoProcurado) {
      return { success: false, message: "Produto não encontrado" };
    }
    produtoProcurado.quantidade = quantidade
    await this.repository.save(produtoProcurado);
    
    return {success: true, message: "quantidade do produto alterada"}

  }
  excluirProduto(id: number): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  consultarProduto(id: number): void | Promise<ProdutoEntity> {
    throw new Error("Method not implemented.");
  }
  
}