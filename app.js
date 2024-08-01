const express = require("express");
const app = express();
const port = 300;

app.get("/", (req, res) => {
  res.send("Hello PICA!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
