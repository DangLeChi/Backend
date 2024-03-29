const getHomePage = (req, res) => {
    // process data
    // call model
    res.send ('Hellp World vs Hoi Dan IT')

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