require("dotenv").config();
const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Chatbot backend running");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
