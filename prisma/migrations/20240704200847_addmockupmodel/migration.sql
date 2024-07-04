-- CreateTable
CREATE TABLE "Mockup" (
    "id" SERIAL NOT NULL,
    "produto" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "url_frente" TEXT NOT NULL,
    "url_costas" TEXT NOT NULL,

    CONSTRAINT "Mockup_pkey" PRIMARY KEY ("id")
);
