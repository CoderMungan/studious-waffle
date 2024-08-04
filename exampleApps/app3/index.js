// install the dependencies
// npm install qrcode-terminal
const qrcode = require("qrcode-terminal");
const readLine = require("readline");
const process = require("process");

const rL = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rL.question("For what you want to get QR code: ", (answer) => {
  qrcode.generate(answer, { small: true });
  rL.close();
});
