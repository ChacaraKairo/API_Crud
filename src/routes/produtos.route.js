/*-----------------------Imports--------------------------*/
import { Router } from "express";
import ProdutoController from "../controllers/produtos.controller.js";
import {
  produtosValidator,
  updateValidator,
  produtosIdValidator,
} from "../validators/produto.validator.js";
/*--------------------Variaveis-----------------------*/
const router = Router();
/*---------------------Rotas--------------------------*/
router.get("/", ProdutoController.index);
router.post(
  "/",
  produtosValidator,
  ProdutoController.create,
);
router.get(
  "/:id",
  produtosIdValidator,
  ProdutoController.show,
);
router.put(
  "/:id",
  updateValidator,
  ProdutoController.update,
);
router.delete(
  "/:id",
  produtosIdValidator,
  ProdutoController.delete,
);
export default router;
