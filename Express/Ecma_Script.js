// const express = require("express")
import express from "express"
const { home } = require("./pages/home")

const app = express()

app.get("",(req, resp)=>{
    resp.send(home())
})

app.listen(4800)