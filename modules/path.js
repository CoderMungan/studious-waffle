const path = require("path");

console.log(
  "Extname-ciktisi:",
  path.extname("~/Desktop/Eğitim/Nodejs/modules/path.js"),
); // .js olarak cikti verecektir
console.log(
  "Basename-ciktisi:",
  path.basename("~/Desktop/Eğitim/Nodejs/modules/path.js"),
); // path olarak cikti verecektir
console.log(
  "Dir-ciktisi:",
  path.dirname("~/Desktop/Eğitim/Nodejs/modules/path.js"),
); // ~/Desktop/Eğitim/Nodejs/modules/path.js olarak cikti verecektir.

const pathFormat = path.format({
  root: "/test/coodermungan/",
  name: "file",
  ext: ".js",
});

console.log("format", pathFormat); // /test/coodermungan/file.js seklinde cikti verecektir.

console.log("join", path.join("/local", "test", "run/d", "x")); // \local\test\run\d\x seklinde cikti verecektir.

console.log("parse", path.parse("~/Desktop/Eğitim/Nodejs/modules/path.js"));
// parse {
// root: '',
// dir: '~/Desktop/Eğitim/Nodejs/modules/',
// base: 'path.js',
// ext: '.js',
// name: 'path'
// }
// seklinde cikti verecektir.
