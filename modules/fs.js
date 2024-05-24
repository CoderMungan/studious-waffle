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
