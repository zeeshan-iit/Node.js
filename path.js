const path = require("path")
const file = "text/zee.txt"


// Globle Constant....
console.log(__filename) //current filename
console.log(__dirname)  //diractry name


// path module..
console.log(path.basename(file)) // file name
console.log(path.dirname(file))  // folder name
console.log(path.extname(file))  // file extension name
console.log(path.isAbsolute(file)) // check is file absolute.