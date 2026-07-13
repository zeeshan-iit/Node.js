const fs = require("fs")

// create new file .
fs.writeFileSync("text/fruit.txt", "Apple is a fruit.");

// Delete an existing file .
fs.unlinkSync("text/fruit.txt")

// Read file.
data = fs.readFileSync("text/zeeshan.txt", "utf-8")

console.log(data)

// update file..
fs.appendFileSync("text/zeeshan.txt", ", Hello")