
require('dotenv').config()
const express = require('express') 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port =process.env.PORT || 8888;
const hostname = process.env.HOSTNAME

configViewEngine(app)

app.use('/', webRoutes)
// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
  res.send('Hello World! Chi')
})

app.get('/abc', (req, res) => {
  res.send('Check abc')
})

app.get('/hoidanit', (req, res) => {
  // res.send('<h1> Dang Thi Le Chi <h1>')
  res.render('sample.ejs')
})

// test connectiôn
// A simple SELECT query
connection.query(
  'SELECT * from Users u',
  function (err, results, fields) {
    console.log(">>> result ",results); // results contains rows returned by server
    
  }
);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

