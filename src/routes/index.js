import { Router } from "express";
import produtosRouter from "./produtos.route.js";

const router = Router();

router.use("/produtos", produtosRouter);

export default router;
