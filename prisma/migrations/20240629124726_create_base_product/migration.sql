-- CreateTable
CREATE TABLE "ProdutoBase" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "sku" TEXT NOT NULL,

    CONSTRAINT "ProdutoBase_pkey" PRIMARY KEY ("id")
);
