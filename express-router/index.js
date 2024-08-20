import express from "express";
const app = express();
const port = 54321;
import router from "./router/router.js";
//Engine setleme
app.set("view engine", "ejs");

//Eger ki farkli bir klasorde viewsleri olusturmak istiyorsak
// app.set("views", path.join(__dirname,"dirName"));

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port} calismaktadir!`);
});
