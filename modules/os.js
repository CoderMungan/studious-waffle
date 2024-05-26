const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU:", os.cpus());
console.log("Memory:", os.totalmem());
console.log("Free memory:", os.freemem());

// end of line
console.log("CoderMungan" + os.EOL + "End of Line");

// home directory
console.log("Home Directory:", os.homedir());

// hostname
console.log("Hostname:", os.hostname());

// uptime
console.log("Uptime:", os.uptime());

// network info
console.log("Network Info:", os.networkInterfaces());

// tmp dir
console.log("Tmp Dir:", os.tmpdir());

// type of OS
console.log("OS Type:", os.type());

// version
console.log("OS Version:", os.version());

// release
console.log("OS Release:", os.release());

// load average
console.log("Load Average:", os.loadavg());

// memory usage
console.log("Memory Usage:", os.memoryUsage());

// current working directory
console.log("CWD:", os.cwd());

// user info
console.log("User Info:", os.userInfo());
