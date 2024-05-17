import { Prisma, PrismaClient } from "@prisma/client";
// Importa as bibliotecas Prisma e PrismaClient do pacote "@prisma/client".

const prisma = new PrismaClient();
// Instancia um novo objeto PrismaClient, que é um gerenciador de banco de dados Prisma.

export default prisma.produto;
// Exporta o modelo de dados denominado "produto".
