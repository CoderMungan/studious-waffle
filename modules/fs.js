// Documentations: "https://nodejs.org/api/fs.html"

const fs = require("fs");

fs.writeFile("index.txt", "Hello World!", (err) => {
  console.log("Error Message", err);
});
fs.writeFileSync("index2.txt", "Hello \n NodeJs", (err) => {
  console.log("Error Message", err);
});

for (let i = 0; i < 10; i++) {
  fs.appendFile("index.txt", "\n Hello", (err) => {
    console.log("Error Message", err);
  });
}

// for the file opening
fs.open("index.txt", "w", (err) => {
  console.log("File Opened");
});

// for the file closing
fs.close(3, (err) => {
  console.log("File Closed");
});

// for the file deleting
fs.unlink("index.txt", (err) => {
  console.log("File Deleted");
});

// for the file renaming
fs.rename("index.txt", "index3.txt", (err) => {
  console.log("File Renamed");
});

// for the file reading
fs.readFile("index2.txt", "utf8", (err, data) => {
  console.log("file read", data.toString());
});

// for the file copying
fs.copyFile("index.txt", "index3.txt", (err) => {
  console.log("File Copied");
});

// for the making directory
fs.mkdir("test", (err) => {
  console.log("Directory made");
});

// for the removing directory
fs.rmdir("test", (err) => {
  console.log("Directory removed");
});

// for the directory listing
fs.opendir("./", async (err, dir) => {
  for await (const d of dir) {
    console.log(
      "name",
      d.name,
      "isFile",
      d.isFile(),
      "isDirectory",
      d.isDirectory(),
    );
  }
});

// for the directory listing
fs.readdir("./", (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

// for the have a file or not?
fs.existsSync("index.txt", (result) => {
  console.log("result", result);
});

// for the have a directory or not?
fs.existsSync("test", (result) => {
  console.log("result", result);
});

// for the file stats
fs.stat("index.js", (err, stats) => {
  console.log("size", stats);
});

// for the watch file
fs.watchFile("index.js", (curr, prev) => {
  console.log("curr", curr, "prev", prev);
});

// for the unwatch file
fs.unwatchFile("index.js", (curr, prev) => {
  console.log("curr", curr, "prev", prev);
});
