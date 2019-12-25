const route = require('express').Router()

let teachers=[
      {name : "Arnav" , subject: "Web Dev"},
      {name : "Prateek" , subject: "Coding schools"}
]

route.get('/', (req,res) => res.send(teachers))
route.get('/:id', (req,res) => res.send(teachers[req.params.id]))

module.exports=route
