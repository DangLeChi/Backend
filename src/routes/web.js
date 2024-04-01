const express = require('express')
const router = express.Router()
const {getHomePage,getABC, hoidanit, postCreateUser, getCreatePage} = require('../controllers/homeControllers')



router.get('/', getHomePage) 
router.get('/abc', getABC) 
router.get('/hoidanit',hoidanit)
router.get('/create',getCreatePage)
router.post('/create-user', postCreateUser)

module.exports = router // export default