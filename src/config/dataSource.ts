import { DataSource } from "typeorm";
import ProdutoEntity from "../entities/ProdutoEntity";
export const AppDataSource = new DataSource({
  type:"sqlite",
  database: "./src/config/database.sqlite",
  entities: [ProdutoEntity],
synchronize: true
})
export default AppDataSource