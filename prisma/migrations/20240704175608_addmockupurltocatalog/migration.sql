/*
  Warnings:

  - You are about to drop the `Mockup` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Catalogo" ADD COLUMN     "mockup_url" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Mockup";
