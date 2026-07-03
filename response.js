const http = require('http')

const server = http.createServer((req, resp)=>{
    resp.setHeader("Content-type", "text/html")
    resp.write(`
        <html>
            <head>
                <title>First server</title>
            </head>
            <body>
                <h1>Hello, Everyone<h1>
            </body>
        </html>
        `)
    resp.end()
})

server.listen(4800);