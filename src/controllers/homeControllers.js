const connection = require ('../config/database')
const {getAllUsers, getUserByID} = require('../services/CRUDService')


const getHomePage = async (req, res) => {
    let results = await getAllUsers()
    // console.log (">>> check rows :", results)
    
    return res.render('home.ejs', {listUsers: results})

}

const getABC = (req, res) => {
    res.send('check ABC')
}

const hoidanit = (req, res) => {
    // res.send('<h1> Dang Thi Le Chi <h1>')
    res.render('sample.ejs')
  }

const postCreateUser = async(req, res) => {
    console.log(">>> req.body", req.body)
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    // console.log(">>> email", email,'name =', name,"city = ", city)

    // let {email, name, city} = req.body

    // Using placeholders


    // connection.query(
    //     'SELECT * from Users u',
    //     function (err, results, fields) {
    //       console.log(">>> result ",results); // results contains rows returned by server
          
    //     }
    // )
    let [results, fields] = await     connection.query(
        `INSERT INTO
        Users (email,name,city)
        VALUES (?,?,?)`,
        [email, name, city],

        
    );
    console.log (">>> check results: ", results)
    res.send('Create user succeed')
    // const [results, fields] = await connection.query(
    //     'SELECT * from Users u')
    // console.log('>>> result ',results)

}

const getCreatePage= (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id
    // console.log(">>> req.params: ",req.params, userID)
    let user = await getUserByID(userID)
    // console.log('>>> check results ',results)
    res.render('update.ejs', { userEdit : user }) 
    
}


module.exports = {
    getHomePage,
    getABC,
    hoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}