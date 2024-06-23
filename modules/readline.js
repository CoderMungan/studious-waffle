const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on("line", (line) => {
  switch (line.trim()) {
    case "selam":
      return console.log("Nasilsin?");

    default:
      console.log("Ne");
      break;
  }
  rl.prompt();
}).on("close", () => {
  console.log("Bye");
  process.exit();
});
