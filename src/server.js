const express = require("express");
const app = express()
const port = 8080;
app.set("view engine","ejs")

let text = 'binh tommy';
let address = 'ha noi';
let users = [
    {
        name:"minh thu",
        address:'ha noi',
        email:"tsdfhu@gmail.com",
    },
    {
        name:"minh vaa",
        address:'ha a',
        email:"thfu@gmail.com",
    },
    {
        name:"a thu",
        address:'a noi',
        email:"tffhu@gmail.com",
    }
]

const server = app.get('/home',(req,res)=>{
    //res.send('heloo')
    res.render('index',{text,address,users})
})
app.listen(port)