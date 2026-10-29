import app from "./app";
import { prisma } from "./app/lib/prisma";
import { redisClient } from "./app/lib/redis";
import { seedSuperAdmin } from "./app/utils/seed";

const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    // Prisma
    await prisma.$connect();
    await seedSuperAdmin();
    console.log("Connected to the database successfully.");

    // Redis
    await redisClient.connect();
    console.log("Redis Connected Successfully");

    // Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error on starting the server.", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
