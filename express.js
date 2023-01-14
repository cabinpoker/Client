const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/User')

const app = express()
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/'), (req, res, next) => {
    res.send("Hello world")
}

app.post('/register', (req, res, next) => {
  console.log(req.body)
})

app.listen(3001, () => {
  console.log('Express Server running on port 3001')
})