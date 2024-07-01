/*
  Warnings:

  - Added the required column `tamanhos` to the `ProdutoBase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProdutoBase" ADD COLUMN     "tamanhos" TEXT NOT NULL;
