const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.json({ message: "Server is working fine", test: "failure" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
