const http = require("http")
const fs = require("fs")

http.createServer((req, resp)=>{
    fs.readFile("html/form.html", "utf-8", (err, data)=>{
        if(err){
            resp.end("404 Page not found.")
            return;
        }
        if(req.url == "/"){
            resp.write(data)
        }else if(req.url == "/submit"){
            resp.write("<h1> Form Submitted. <h1>")
        }
        resp.end()
    })
}).listen(4800)