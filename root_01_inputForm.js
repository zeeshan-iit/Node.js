function inputForm(req, resp){
    resp.writeHead(200,{"content-type": 'text/html'})
    
    resp.write(`
        <form action = "/submit" method = "post">
            <input type="text" placeholder="name" name = "name">
            <input type="text" placeholder="email" name = "email">
            <button>submit</button>
        </form>
        `)
    resp.end()
}

module.exports = inputForm