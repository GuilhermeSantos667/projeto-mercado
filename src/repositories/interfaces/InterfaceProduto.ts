import ProdutoEntity from "../../entities/ProdutoEntity";

export default interface InterfaceProduto{

  cadastrarProduto(produto:ProdutoEntity):void,
  listar():void | Promise<ProdutoEntity>,
  listarPorId(id:number):void | Promise<ProdutoEntity>
  excluirProduto(id:number):void | Promise<ProdutoEntity>
  consultarProduto(id:number):void | Promise<ProdutoEntity>
}