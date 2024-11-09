import express, { Response } from "express";
import router from "./routes";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";
const app = express();
app.use(express.json()); 
router(app);

AppDataSource.initialize().then(() =>{
  console.log("banco de dados inicializado");
  
}).catch((erro: any) =>{
  console.log(erro);
  
})

export default app;