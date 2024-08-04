const readLine = require("readline");
const fs = require("fs");
const c = require("ansi-colors");

const filename = process.argv[2];
// node file.js (which file u want the read)
// example: node file.js first.txt

const colors = ["red", "green", "blue", "yellow"];

const readFileLineByLine = async () => {
  // Condition about the filename
  if (!filename) {
    console.log("Please provide filename");
    return;
  }
  const fileStream = fs.createReadStream(filename);
  const rl = readLine.createInterface({
    input: fileStream,
  });
  for await (const line of rl) {
    const randomNumber = Math.floor(Math.random() * 3);
    const randomColor = colors[randomNumber];
    console.log(c[randomColor](line));
  }
};

readFileLineByLine();
