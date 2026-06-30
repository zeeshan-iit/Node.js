const http = require("http")

http.createServer((req, resp)=>{
    resp.write("<h1>Server is running.<h1>");
    resp.end("Ending");
}).listen(4800)