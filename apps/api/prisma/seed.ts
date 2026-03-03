import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  const contentPath = path.join(__dirname, "../../web/content.json");
  const content = JSON.parse(fs.readFileSync(contentPath, "utf-8"));

  const productsData = content.bestSellers.products;

  console.log("🌱 Seeding categories...");
  const honeyCategory = await prisma.category.upsert({
    where: { name: "Honey" },
    update: {},
    create: { name: "Honey" },
  });

  console.log("🌱 Seeding products...");
  for (const product of productsData) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        tag: product.tag || null,
        categoryId: honeyCategory.id,
      },
    });
  }

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
