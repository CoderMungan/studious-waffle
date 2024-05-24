const fs = require("fs");

fs.writeFile("index.txt", "Hello World!", (err) => {
  console.log("Error Message", err);
});
fs.writeFileSync("index2.txt", "Hello \n NodeJs", (err) => {
  console.log("Error Message", err);
});

for (let i = 0; i < 10; i++) {
  fs.appendFile("index.txt", "\n Hello", (err) => {
    console.log("Error Message", err);
  });
}
