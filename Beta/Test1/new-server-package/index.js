const express = require('express')

const server = express()

server.get('/', function (req, res, next){
    res.send("Hello World")
})

server.get('/studio',function (req, res, next){
    res.send("Hello friend")
})

server.get('/studio/:yesers', function(req, res, next){
    let greeting="Hello Friend" + " " + req.params.yesers +  " " + req.query.name
    res.send(greeting)
})
server.listen(4000)