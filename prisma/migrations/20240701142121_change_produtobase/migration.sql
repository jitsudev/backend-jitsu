/*
  Warnings:

  - You are about to drop the column `sku` on the `ProdutoBase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProdutoBase" DROP COLUMN "sku",
ALTER COLUMN "cores" DROP DEFAULT;
