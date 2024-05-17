import Produto from "../models/produtos.model.js";
import { validationResult } from "express-validator";

async function verification(req, res, tabela) {
  const produto = await tabela.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!produto) {
    return res
      .status(404)
      .json({ message: "Produto não encontrado" });
  }
  return produto;
}

export default class ProdutoController {
  static async index(req, res) {
    const produtos = await Produto.findMany();
    res.json(produtos);
  }

  static async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
    const produto = await Produto.create({
      data: req.body,
    });
    res.json(produto);
  }

  static async show(req, res) {
    const produto = await verification(req, res, Produto);
    res.json(produto);
  }

  static async update(req, res) {
    const produto = await verification(req, res, Produto);
    const updatedProduto = await Produto.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    res.json(updatedProduto);
  }

  static async delete(req, res) {
    const produto = await verification(req, res, Produto);
    await Produto.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res
      .status(200)
      .json({ mensage: "Produto excluído com sucesso" });
  }
}
