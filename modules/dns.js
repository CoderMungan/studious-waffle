const dns = require("dns");
const os = require("os");

dns.lookup("youtube.com", (err, address, family) => {
  console.log(address, family);
});

// 142.250.184.142 4

dns.resolve("youtube.com", (err, address) => {
  console.log("adress", address);
});

// address ['142.250.184.142']

// Local IP
console.log("Local Ip:", dns.getServers());

// Hostname Ip
dns.lookup(os.hostname(), (err, add, fm) => {
  console.log("add", add);
  console.log("fm", fm);
});
