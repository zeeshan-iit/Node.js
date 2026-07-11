const querystring = require("querystring")

function submit(req, resp){
    let data = []
    req.on('data', (chunks)=>{
        data.push(chunks)
    })

    req.on('end', ()=>{
        let rowdata = Buffer.concat(data).toString()
        let readabledata = querystring.parse(rowdata)
        resp.writeHead(200,{"content-type": 'text/html'})
        resp.write(`
            <h1>Submitted.</h1>
            <p>Name is : ${readabledata.name}, Email is : ${readabledata.email}</p>
        `)
        resp.end()
    }) 
}

module.exports = submit;