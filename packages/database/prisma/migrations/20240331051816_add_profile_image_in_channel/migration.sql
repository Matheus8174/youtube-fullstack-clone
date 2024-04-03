/*
  Warnings:

  - Added the required column `profileImage` to the `channels` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_channels" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL
);
INSERT INTO "new_channels" ("email", "name") SELECT "email", "name" FROM "channels";
DROP TABLE "channels";
ALTER TABLE "new_channels" RENAME TO "channels";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
