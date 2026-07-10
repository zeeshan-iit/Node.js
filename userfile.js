const http = require("http")
const fs = require("fs")
const querystring = require("querystring")
// const { buffer } = require("stream/consumers")

http.createServer((req, resp)=>{
    
        if(req.url == "/"){
            fs.readFile("html/form.html", "utf-8", (err,data)=>{
                if(err){
                    resp.end("404 Page not found.")
                    return;
                }
                resp.writeHead(200, {'content-type' : 'text/html'})
                resp.write(data)
                resp.end()
            })
        }else if(req.url == "/submit"){
            let formdata = [];
            req.on('data', (chunk)=>{
                formdata.push(chunk)
            });

            req.on('end', ()=>{
                let rowdata = Buffer.concat(formdata).toString()
                cleandata = new URLSearchParams(rowdata)

                let name = cleandata.get('name')
                let email = cleandata.get('email')
                resp.write("<h1> Form Submitted. </h1>")
                // resp.write(`<h1>Name : ${name} </h1>`)
                // resp.write(`<h1>Email : ${email} </h1>`)
                let string = `Name is : ${name}, Email is : ${email}.`
                fs.writeFileSync("text/"+name+".txt", string)
                // resp.write(string)
                console.log("File created.")
                resp.end()
            })
        }
}).listen(4800)