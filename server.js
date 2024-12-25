const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());

//Enable Cors
app.use(cors());

// Routes
app.use("/books", bookRoutes);

// MongoDB Connection
mongoose
  .connect('mongodb+srv://Ayuship:9jQOXvCzbH8hq7nI@cluster0.pvgxw4g.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
