const events = require("events");

const eventEmiter = new events.EventEmitter();

const customListener = (data) => {
  console.log("started", data);
};

eventEmiter.addListener("LoopStarted", customListener);

eventEmiter.on("LoopEnded", (data) => {
  console.log("listener:", data);
});

// u can call on time with once

eventEmiter.once("LoopEnded", (data) => {
  console.log("once", data);
});

const forLoop = () => {
  eventEmiter.emit("LoopStarted", Date.now());
  for (let index = 0; index < 100000000; index++) {}
  eventEmiter.emit("LoopEnded", Date.now());
};

// U can set max limit limit
eventEmiter.setMaxListeners(2);

// Remove all listeners
eventEmiter.removeAllListeners("LoopEnded");
// or
eventEmiter.removeListener("LoopEnded", customListener);

forLoop();
