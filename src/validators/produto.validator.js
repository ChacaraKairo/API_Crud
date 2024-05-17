import { body } from "express-validator";
export const produtoValidator = [
  body("nome")
    .isString()
    .withMessage("O nome é obrigatório"),
  body("preco")
    .isNumeric()
    .withMessage("O preco é obrigatório"),
  body("descricao")
    .isString()
    .withMessage("A descrição é obrigatória"),
];
export const updateValidator = [
  param("id").isInt().withMessage("O id é obrigatório"),
  body("nome"),
  body("nome")
    .isString()
    .withMessage("O nome é obrigatório"),
  body("preco")
    .isNumeric()
    .withMessage("O preco é obrigatório"),
  body("descricao")
    .isString()
    .withMessage("A descrição é obrigatória"),
];
export const produtoIdValidator = [
  param("id").isInt().withMessage("O id é obrigatório"),
];
