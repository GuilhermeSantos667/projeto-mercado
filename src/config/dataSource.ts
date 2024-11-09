import { DataSource } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
import FuncionarioEntity from "../entities/FuncionarioEntity";
export const AppDataSource = new DataSource({
  type:"sqlite",
  database: "./src/config/database.sqlite",
  entities: [ProdutoEntity, FuncionarioEntity],
synchronize: true
})
export default AppDataSource