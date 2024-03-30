const express = require('express')
const router = express.Router()
const {getHomePage,getABC, hoidanit} = require('../controllers/homeControllers')



router.get('/', getHomePage) 
router.get('/abc', getABC) 
router.get('/hoidanit',hoidanit)

module.exports = router // export default