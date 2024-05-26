const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");

// parca parca okuma
const inp = fs.createReadStream("testforzlib.txt");

// inp.on("data", (data) => {
//   // buffer olarak geliyor bu sebeple stringe ceviriyoruz!
//   console.log(data.toString());
// });

console.log(inp);

// yazma
const out = fs.createWriteStream("testforzlib.txt.gz");

// zip olusturma
inp.pipe(gzip).pipe(out);
