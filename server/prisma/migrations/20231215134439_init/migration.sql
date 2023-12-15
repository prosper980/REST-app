-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "location" TEXT,
    "videoCount" INTEGER,
    "subscribersCount" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
