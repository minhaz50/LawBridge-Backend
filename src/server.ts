import app from "./app";
import { prisma } from "./app/lib/prisma";

const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");

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
