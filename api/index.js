const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// Health/root endpoint
app.get("/", (req, res) => {
  res.json({ status: "VibeStream API running" });
});

// Start server
const server = app.listen(PORT, () => console.log(`API running on port ${PORT}`));

// Export app and server for testing (optional)
module.exports = { app, server };
