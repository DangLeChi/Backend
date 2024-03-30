const connection = require ('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs')

}

const getABC = (req, res) => {
    res.send('check ABC')
}

const hoidanit = (req, res) => {
    // res.send('<h1> Dang Thi Le Chi <h1>')
    res.render('sample.ejs')
  }
module.exports = {
    getHomePage,
    getABC,
    hoidanit
}