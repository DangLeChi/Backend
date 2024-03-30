const connection = require ('../config/database')

const getHomePage = (req, res) => {
    // process data
    // call model
    let users = [];
    connection.query(
        'SELECT * from Users u',
        function (err, results, fields) {
            users =  results
            console.log(">>> result home page ",results); // results contains rows returned by server
            // console.log('>>> check user : ', users)
            res.send (JSON.stringify(users))
        }
      );

}

const getABC = (req, res) => {
    res.send('check AB')
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