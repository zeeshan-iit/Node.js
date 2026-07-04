const console = require("console")
const http = require("http")

http.createServer((req, resp)=>{
    // console.log(req.url)
    if(req.url == "/"){
        resp.write("<h1>Hello, Admin<h1>")
    }else if(req.url == "/login"){
        resp.write("<h1>Login Page<h1>")
    }else if(req.url == "/logout"){
        resp.write("<h1>Logout........<h1>")
    }
    resp.end()
}).listen(5900)