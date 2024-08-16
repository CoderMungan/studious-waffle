const express = require("express");
const app = express();
const port = 54321;
const appRouter = require("./router/router");

app.use(appRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port} calismaktadir!`);
});
