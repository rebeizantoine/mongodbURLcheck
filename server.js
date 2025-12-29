const express = require("express");
const app = express();
require("dotenv").config();

// Import health route
const healthRoute = require("./routes/healthRoutes");

// Use the route at "/"
app.use("/", healthRoute);

// Your other routes
// const adminRoutes = require("./routes/admin");
// app.use("/admin/admins", adminRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
