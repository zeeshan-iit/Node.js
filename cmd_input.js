const http = require("http")

const arg = process.argv;

http.createServer((req, resp)=>{
    resp.end("Dynamic Port.")
}).listen(arg[2])