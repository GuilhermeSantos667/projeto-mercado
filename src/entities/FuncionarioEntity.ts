import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumCargo from "../enum/EnumCargo";


@Entity()
export default class FuncionarioEntity{

  @PrimaryGeneratedColumn()
  id!:number 
  @Column()
  nome:string
  @Column()
  cargo:EnumCargo

constructor(nome:string, cargo:EnumCargo){
  this.nome = nome,
  this.cargo = cargo
}

}