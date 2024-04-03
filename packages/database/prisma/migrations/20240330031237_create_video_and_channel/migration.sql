-- CreateTable
CREATE TABLE "channels" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "videoUrl" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "channelEmail" TEXT NOT NULL,
    CONSTRAINT "videos_channelEmail_fkey" FOREIGN KEY ("channelEmail") REFERENCES "channels" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
