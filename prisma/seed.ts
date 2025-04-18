// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  // Number of products to generate
  const COUNT = 20

  
  await prisma.product.deleteMany()

  const creations = Array.from({ length: COUNT }).map(() => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price({min: 1, max: 1000})),
  }))

  // Bulk create all products
  const products = await prisma.product.createMany({
    data: creations,
  })

  console.log(`Created ${products.count} products.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
