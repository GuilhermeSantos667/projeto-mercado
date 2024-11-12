import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class ProdutoEntity{

  @PrimaryGeneratedColumn()
  id!:number 
  @Column()
  nome:string
  @Column()
  quantidade: number
  @Column()
  valor: number

constructor(nome:string, quantidade:number, valor:number){
  this.nome = nome,
  this.quantidade = quantidade
  this.valor = valor
}

}