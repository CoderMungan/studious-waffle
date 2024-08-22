import express from "express";
import router from "./router/router.js";
import path from "path";

// ECMA icin `__dirname` e ulasmak icin
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 54321;
//Engine setleme
app.set("view engine", "ejs");

// Static File
app.use("/static", express.static(path.join(__dirname, "assets")));

//Eger ki farkli bir klasorde viewsleri olusturmak istiyorsak
// app.set("views", path.join(__dirname,"dirName"));

app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port} calismaktadir!`);
});
