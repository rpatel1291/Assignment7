const io = require("socket.io-client")
const key = require("./constant")
let query = '';
let url = `https://pixabay.com/api/?key=${key}+&q=`+encodeURIComponent(query);

let socket = null
let port = process.env.PORT || 3000

socket = io(`http://localhost:${port}/user-search`)
socket.on("request-credentials", ()=>{
    alert("test")
})



// const openConnection = () => {
//     return new Promise((resolve, reject) => {
//         socket = io(`http://localhost:${port}/user-search`)
//         socket.on("request-credentials", ()=>{
//             alert("test")
//         })


//         socket.on("connect", resolve)
//     })
// }