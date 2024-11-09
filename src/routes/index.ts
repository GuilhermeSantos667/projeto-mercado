import express from "express";
import produtoRouter from "./produtoRouter";
const router = (app: express.Router) => {
  app.use("/produtos", produtoRouter);
};
export default router;
