const connection = require("../config/database")
const getAllUsers =async () => {
    let [results, fields] = await connection.query('select * from Users')
    return  results

}

const getUserByID = async (userID) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', userID)
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (email, city,name, userID )=> {
    let [results, fields] = await     connection.query(
        `
        UPDATE Users 
        SET email = ?, city= ?, name = ?
        WHERE id = ?`,
        [email, city,name, userID]
    );

}
module.exports = {
    getAllUsers,
    getUserByID,
    updateUserById
} 