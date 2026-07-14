const fs = require("fs")

const operation = process.argv[2]
const name = process.argv[3]
const content = process.argv[4]

if (operation == "write"){
    fs.writeFileSync(`text/${name}.txt`, content)
}else if(operation == "read"){
    data = fs.readFileSync(`text/${name}.txt`, "utf-8")
    console.log(data)
}else if(operation == "delete"){
    fs.unlink(`text/${name}.txt`)
}else if(operation == "update"){
    fs.appendFileSync(`text/${name}.txt`, content)
}else {
    console.log("Wrong input.")
}