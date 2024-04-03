const express = require('express')
const router = express.Router()
const {getHomePage,getABC, hoidanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser} = require('../controllers/homeControllers')



router.get('/', getHomePage) 
router.get('/abc', getABC) 
router.get('/hoidanit',hoidanit)
router.get('/create',getCreatePage)
router.get('/update/:id',getUpdatePage)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)


module.exports = router // export default