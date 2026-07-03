const http = require("http")

http.createServer((req, resp)=>{
    resp.write("<h1>Server is running.<h1>");
    resp.end("Ending");
}).listen(4800)

// we also create multi server in same file on diferent port