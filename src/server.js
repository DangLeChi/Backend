
require('dotenv').config()
const express = require('express') 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')

const app = express()
const port =process.env.PORT || 8888;
const hostname = process.env.HOSTNAME

configViewEngine(app)

app.use('/test', webRoutes)
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
// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, // default: 3306
  user: 'root', //default: empty
  password : '123456',
  database: 'hoidanit',
});

// A simple SELECT query
connection.query(
  'SELECT * from Users u',
  function (err, results, fields) {
    console.log(">>> result ",results); // results contains rows returned by server
    console.log(">>>fields ",fields); // fields contains extra meta data about results, if available
  }
);


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

