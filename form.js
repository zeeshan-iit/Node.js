const http = require("http")

http.createServer((req, resp)=>{
    resp.writeHead(200,{"content-type" : "text/html"})
    if(req.url == "/"){
        resp.write(`
            <h1>Fill the data.<h1>
            <form action = "/submit" method = "post">
                <input type = "text" placeholder = "Enter name" name = "name">
                <input type = "text" placeholder = "Enter email" name = "email">
                <button>submit</button>
            </form>
            `)
        resp.end()
    }else if(req.url == "/submit"){
        resp.write("<h1>Form Submitted<h1>")
        resp.end()
    }
}).listen(5800)