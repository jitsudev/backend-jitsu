-- CreateTable
CREATE TABLE "Catalogo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "estilo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "sku" TEXT NOT NULL,

    CONSTRAINT "Catalogo_pkey" PRIMARY KEY ("id")
);
