const path = require("path")
const express = require("express")

const app = express()

app.get("", (req, resp)=>{
    let abspath = path.resolve("pages/home.html")
    resp.sendFile(abspath)
})
app.get("/login", (req, resp)=>{
    let abspath = path.resolve("pages/login.html")
    resp.sendFile(abspath)
})
app.use((req, resp)=>{
    let abspath = path.resolve("pages/404.html")
    resp.status(404).sendFile(abspath)
})
app.listen(4800)