import ProdutoEntity from "../../entities/ProdutoEntity";

export default interface InterfaceProduto{

  cadastrarProduto(produto:ProdutoEntity):void,
  listar():Promise<ProdutoEntity[]> ,
  listarPorId(id:number):Promise<{ success: boolean; message?: string }> | void
  excluirProduto(id:number):void | Promise<ProdutoEntity>
  consultarProduto(id:number):void | Promise<ProdutoEntity>
}