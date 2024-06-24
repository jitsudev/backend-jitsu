-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discount" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "base_sku" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);
