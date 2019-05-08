const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const server = require('http').createServer(app)
const io = require("socket.io").listen(server)

const port = 3000
server.listen(port)


const cors = require('cors')
app.use(cors())
const path = require('path')
const redisConnection = require("./redis-connection")

const userSearch = io.of('/user-search')

const connections = []

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname+'/index.html'))

})

userSearch.sockets.on('connection', (socket) =>{
    let userName = null
    let searchQuery = null
    let userMessage = null

    socket.on("disconnect", () => {
        connections.splice(connections.indexOf(socket),1)
    })

    socket.on("sending-user", name => {
        userName = name
    })

    socket.on("sending-query", query => {
        searchQuery = query
    })

    socket.on("sending-message", message => {
        userMessage = message
    })

    redisConnection.emit("get-results", {name: userName, query: searchQuery, message: userMessage})
})
console.log("Server is running")