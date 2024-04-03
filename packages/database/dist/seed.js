"use strict";

// src/seed.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
async function main() {
  await prisma.video.deleteMany();
  await prisma.channel.deleteMany();
}
main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
