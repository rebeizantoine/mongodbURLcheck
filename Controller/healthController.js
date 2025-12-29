const mongoose = require("mongoose");

const checkHealth = async (req, res) => {
  try {
    // Try to connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    await mongoose.connection.close();

    res.status(200).json({
      status: "ok",
      message: "Server is running and MongoDB is reachable",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "MongoDB connection failed",
      error: err.message,
    });
  }
};

module.exports = { checkHealth };
