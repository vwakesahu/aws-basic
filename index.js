require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the port from environment variables, or 3000 as a fallback

// Basic GET request handler
app.get("/", (req, res) => {
  res.send("Hello, World! Your Node.js server is running.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
