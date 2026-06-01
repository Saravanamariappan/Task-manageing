require("dotenv").config();
require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-manageing-1.onrender.com"
    ],
    credentials: true,
  })
);

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});