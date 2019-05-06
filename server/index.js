const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const io = require('socket.io')(http)

const port = process.env.PORT || 3000
const userSearch = io.of("/user-search")

app.use(cors())

app.get("/", (req, res) => {
    res.send('OK')
})

userSearch.on("connection", socket => {
    
})