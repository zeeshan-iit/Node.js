const http = require("http")
const fs = require("fs")

http.createServer((req, resp)=>{
    let loadheader = fs.readFileSync(`html/header.html`,"utf-8")
    let loadfooter = fs.readFileSync(`html/footer.html`,"utf-8")
    let file = "/home"
    if(req.url != "/"){
        file = req.url;
    }


    if(req.url != "/style.css"){
        data = fs.readFile(`html${file}.html`,'utf-8', (err, data)=>{
            if(err){
                resp.writeHead(500, {"content-type": "text/plain"})
                resp.end("Internal Server Error!")
                return false;
            }
            resp.write(loadheader+""+data+""+loadfooter)
            resp.end()
        })
    }else if(req.url == "/style.css"){
        data = fs.readFile(`html/style.css`,'utf-8', (err, data)=>{
            if(err){
                resp.writeHead(500, {"content-type": "text/css"})
                resp.end("CSS not found!")
                return false;
            }
            resp.end(data)
        })
    }
}).listen(4800)