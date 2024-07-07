/*
  Warnings:

  - You are about to drop the column `mockup_url` on the `Catalogo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catalogo" DROP COLUMN "mockup_url",
ADD COLUMN     "custo" TEXT NOT NULL DEFAULT '';
