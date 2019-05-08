const redisConnection = require("./redis-connection")
const axios = require("axios")
const io = require("socket.io-client")
const key = require("./constant")
let url = `https://pixabay.com/api/?key=${key}+&q=`;

let socket = io('http://localhost:3000/user-search')

let resultData = null

redisConnection.on("get-results", (data , channel) =>{
    url = url + data.query
    const sendResult = async () => {
        if(resultData === null){
            $.getJSON(url, data => {
                if(parseInt(data.total)>0){
                    resultData = data
                }
                else{
                    resultData = "No Hits"
                }
            })   
        }
        socket.on("send-result", resultData => {
            $.each(resultData.hits, function(i ,hit){
                //
                socket.emit("display-result", hit)
            })
        })
    }
    

})



// socket = io(`http://localhost:${port}/user-search`)
// socket.on("runQuery", (query)=>{
//     this.query = query
//     url += encodeURIComponent(query)
//     $.getJSON(url, data => {
//         if(parseInt(data.total)>0){
//             socket.emit("return-result", data)
//         }
//         else{
//             io.sockets.emit("return-result", "No Hits")
//         }
//     })
// })


