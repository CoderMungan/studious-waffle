const readline = require("readline");
const process = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sayi 1 Giriniz", (num) => {
  rl.question("Sayi 2 Giriniz", (num2) => {
    const result = Number(num) + Number(num2);
    console.log("Sonuc:", result);
    rl.close();
  });
});
