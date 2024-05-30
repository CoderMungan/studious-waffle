const timers = require("timers");

// her saniye'de surekli calismasini istiyorum
timers.setInterval(() => {
  console.log("Hello World!", Date.now());
  console.log(new Date().toTimeString());
}, 1000);

// 5 saniye sonra calis 1 kere calisir
timers.setTimeout(() => {
  console.log("Calistim CoderMungan");
}, 5000);

// Kuyruktakilerden once calisacaktir.
timers.setImmediate(() => {
  console.log("Calistim setImmediate CoderMungan");
});
