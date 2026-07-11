const http = require("http")
let inputForm = require("./root_01_inputForm")
let submit = require("./root_01_submit")

http.createServer((req, resp)=>{
    
    if(req.url == "/"){
        inputForm(req, resp)
    }if(req.url == "/submit"){
        submit(req, resp)
    }
}).listen(4800)