const express = require('express')
const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const path = require('path')
const io = require("socket.io")(http)

const port = 3000
const userSearch = io.of('/user-search')

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname+'/index.html'))
})

userSearch.on('connection', socket => {
    console.log('connected')
    socket.emit("request-credentials")
})

app.listen(port, ()=>{
    console.log("listening on http://localhost:3000")
})