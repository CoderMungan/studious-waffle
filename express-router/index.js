const express = require("express");
const app = express();
const port = 54321;
const appRouter = require("./router/router");

//Engine setleme
app.set("view engine", "ejs");

//Eger ki farkli bir klasorde viewsleri olusturmak istiyorsak
// app.set("views", path.join(__dirname,"dirName"));

app.use(appRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port} calismaktadir!`);
});
