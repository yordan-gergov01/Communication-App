const { spawn } = require("child_process");
const fs = require("fs");

const numberFormatter = spawn("node", [
  "number_formatter.js",
  "./dest.txt",
  "$",
  ",",
]);

numberFormatter.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

numberFormatter.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

numberFormatter.on("close", (code) => {
  if (code === 0) {
    console.log("The file was read, processed and written successfully!");
  } else {
    console.log("Something bad happened!");
  }
});

const fileStream = fs.createReadStream("./src.txt");
fileStream.pipe(numberFormatter.stdin);
