-- CreateTable
CREATE TABLE "Mockup" (
    "id" SERIAL NOT NULL,
    "produto" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "posicao" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageKey" TEXT NOT NULL,

    CONSTRAINT "Mockup_pkey" PRIMARY KEY ("id")
);
