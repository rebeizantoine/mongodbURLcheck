const express = require("express");
const router = express.Router();
const { checkHealth } = require("../Controller/healthController");

// Root route for health check
router.get("/", checkHealth);

module.exports = router;
