const express = require('express') 
const app = express()
// import express form 'express';
const path = require('path')
require('dotenv').config()


console.log(">>check env", process.env)
const port =process.env.PORT || 8888;
console.log(process.env.HOSTNAME)
const hostname = process.env.HOSTNAME



app.get('/', (req, res) => {
  res.send('Hello World!')
})
// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/abc', (req, res) => {
  res.send('Check abc')
})

app.get('/hoidanit', (req, res) => {
  // res.send('<h1> Dang Thi Le Chi <h1>')
  res.render('sample.ejs')
})


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})