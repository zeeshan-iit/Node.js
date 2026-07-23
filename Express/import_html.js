const express = require("express")
const path = require("path")

const app = express()

app.get("", (req, resp)=>{
    let abspath = path.resolve("pages/home.html")
    resp.sendFile(abspath)
})
app.get("/login", (req, resp)=>{
    let abspath = path.resolve("pages/login.html")
    resp.sendFile(abspath)
})

app.listen(4800)