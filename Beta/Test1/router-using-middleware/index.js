const express = require('express')

const server = express()

const teachers = require('./routes/teachers.js')

const students = require('./routes/students.js')

server.use('/teachers',teachers)

server.use('/students' ,students)

server.listen(3000)