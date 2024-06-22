const process = require("process");
const cp = require("child_process");

process.on("SIGINT", () => {
  console.log("Kullanici cikis yapmak istiyor...");
  //Progressi killemek icin
  process.exit();
});

process.on("beforeExit", () => {
  console.log("Process baslamadan once");
});

// setInterval(() => {
//   console.log(Date.now());
// }, 1000);

process.on("exit", () => {
  console.log("Process bitti");
});

console.log("Selam");

console.log(process.env);
console.log(process.argv);
console.log(process.cwd());
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
console.log(process.memoryUsage());
console.log(process.cpuUsage());
console.log(process.version);
console.log(process.title);

cp.exec("tasklist", (err, stdout, stderr) => {
  console.log("---------------------");
  console.log("Gorev Listesi".stdout);
});

// Processi killemek icin process.kill(id numarasini yazacaksin!)
// process.kill();
