const route = require('express').Router()

let students=[
      {name : "Arnav" , subject: "Web Dev",year:"I"},
      {name : "Prateek" , subject: "Coding schools", year:"II"},
      {name : "Gurparkar" , subject: "App Development", year:"III"}
]

route.get('/', (req,res) => res.send(students))
route.get('/:id', (req,res) => res.send(students[req.params.id]))

module.exports=route
