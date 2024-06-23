const ownModule = require("./ownModule");

console.log(ownModule.name);
console.log(ownModule.getData());
ownModule.customModule.setLog("CoderMungan");

console.log(ownModule.customModule.add(10, 20));
