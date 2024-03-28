const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! Chi')
  })
  
router.get('/abc', (req, res) => {
    res.send('Check abc')
  })
  
router.get('/hoidanit', (req, res) => {
    // res.send('<h1> Dang Thi Le Chi <h1>')
    res.render('sample.ejs')
  })

module.exports = router // export default