/*
  Warnings:

  - You are about to drop the column `url_costas` on the `Mockup` table. All the data in the column will be lost.
  - You are about to drop the column `url_frente` on the `Mockup` table. All the data in the column will be lost.
  - Added the required column `posicao` to the `Mockup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Mockup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mockup" DROP COLUMN "url_costas",
DROP COLUMN "url_frente",
ADD COLUMN     "posicao" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
