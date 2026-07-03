const http = require("http")
var data = [
    {
        name : "Zeeshan",
        age : 19,
        email : "zeeshan@gmail.com"
    },
    {
        name : "Anas",
        age : 21,
        email : "Anas@gmail.com"
    },
    {
        name : "Ali",
        age : 23,
        email : "Ali@gmail.com"
    }
]
http.createServer((req, resp)=>{
    resp.setHeader("Content-Type", "application/json")
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(6100)