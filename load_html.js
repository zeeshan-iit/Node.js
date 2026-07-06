const http = require("http")
const fs = require("fs")

http.createServer((req, resp)=>{
    fs.readFile('html/dem.html', 'utf-8', (err, data)=>{
        if(err){
            resp.end("Error 404!")
            return;
        }
        resp.writeHead(200,{'content-type': 'text/html'})
        resp.write(data)
        resp.end();
    })
}).listen(5800)