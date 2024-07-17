// src/app.js
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route using the environment variable
app.get("/api", (req, res) => {
  res.send(`Backend URL is ${process.env.BACKEND_URL}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
