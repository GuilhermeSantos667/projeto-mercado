import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class ProdutoEntity{

  @PrimaryGeneratedColumn()
  id!:number 
  @Column()
  nome:string
  @Column()
  quantidade: number

constructor(nome:string, quantidade:number){
  this.nome = nome,
  this.quantidade = quantidade
}

}