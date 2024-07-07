/*
  Warnings:

  - You are about to drop the column `posicao` on the `Mockup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Catalogo" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "composicao" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Mockup" DROP COLUMN "posicao",
ADD COLUMN     "descricao" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "key" TEXT NOT NULL DEFAULT '';
