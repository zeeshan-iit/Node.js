const express = require("express")
const app = express();

app.get("", (req, resp)=>{
    resp.send("<h1>Home Page.</h1><br><a href='/login'>Login</a>")
    
})
app.get("/login", (req, resp)=>{
    resp.send(`
            <form action="/submit" method="post">
                <input type="text" placeholder="name">
                <input type="text" placeholder="name">
                <button>submit</button>
            </form>
        `)
})
app.post("/submit", (req, resp)=>{
    resp.send("<h1>Login Seccfully............</h1><br><a href='/'>Home Page</a>")
})


app.listen(4800)