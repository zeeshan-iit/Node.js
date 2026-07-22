const express = require("express")

const app = express()
app.get("", (req, resp)=>{
    resp.send("<h1>Hello Express.</h1>")
})
app.get("/about", (req, resp)=>{
    resp.send("<h1>Hello Express, About.</h1>")
})

app.listen(5600)