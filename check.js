require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  console.error("❌ MONGODB_URL not set in environment variables.");
  process.exit(1);
}

async function checkMongo() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ MongoDB connection successful!");
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ MongoDB connection failed:");
    console.error(err.message);
    process.exit(1);
  }
}

checkMongo();
