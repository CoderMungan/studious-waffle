const cron = require("node-cron");

const foo = (name) => {
  console.log(name);
};

// NOTE: for the star setting the time

// Every second
cron.schedule("* * * * * *", () => {
  foo("You are best CoderMungan");
});

// Every minute
cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});
