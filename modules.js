var zee = require("fs")
var os = require("os")

zee.writeFileSync("test.txt", "my name is zeeshan");

console.log(os.homedir())
console.log(os.hostname())
