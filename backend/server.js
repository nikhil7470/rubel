// backend/server.js
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
