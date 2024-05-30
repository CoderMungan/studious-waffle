const url = require("url");

const myUrl = new URL(
  "http://www.codermungan.com:8000/hello.html?id=100&status=active",
);

// without module
console.log("Href:", myUrl.href);
console.log("pathname:", myUrl.pathname);
console.log("searchParams:", myUrl.searchParams);

myUrl.searchParams.forEach((value, name) =>
  console.log("Gelen Deger ForEach'ten", name, value),
);

console.log("searchParams get id :", myUrl.searchParams.get("id"));
console.log("searchParams get status", myUrl.searchParams.get("status"));

console.log(
  "has? :",
  myUrl.searchParams.has("id"),
  myUrl.searchParams.has("status"),
  myUrl.searchParams.has("name"),
);

console.log("hash: ", myUrl.hash);
console.log("hostname: ", myUrl.hostname);
console.log("protocol:", myUrl.protocol);
console.log("port:", myUrl.port);
// with module

const myUrl2 =
  "http://www.codermungan.com:8000/hello.html?id=100&status=active";

console.log(url.parse(myUrl2));
