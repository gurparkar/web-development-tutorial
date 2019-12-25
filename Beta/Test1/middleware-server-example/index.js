const express = require('express')
var server = express()
var m1 = function(req, res, next){
    console.log("This is the middle ware 1")
    next()
}

var m2 = function (req, res, next){
    console.log("This is middleware 2")
    next()
}

var m3 = function (req, res, next){
    console.log("This is middleware 3")
    next()
}

server.use(m1)
server.use(m2)
server.use(m3)

server.get('/',function(req, res, next){
    res.send("This is new Era India")
})

server.listen(3000)