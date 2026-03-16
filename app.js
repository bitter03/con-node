const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/api/status", (req, res) => {
  res.json({ api: "running" });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
module.exports = app;
