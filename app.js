const express = require('express');
const EventEmitter = require('events');
const PORT = 4444;
const  event = new EventEmitter();
const app = express();

let count = 0;
event.on("APIcount" , ()=>{
    count++;
    console.log("Count" , count);
})

app.get("/" , (req ,res)=>{
    res.send("<h1>Hello world</h1>")
    event.emit("APIcount")
})

app.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`);
})