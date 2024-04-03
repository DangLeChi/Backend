const express = require('express')
const router = express.Router()
const {getHomePage,getABC, postHandleRemoveUser,hoidanit, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser} = require('../controllers/homeControllers')



router.get('/', getHomePage) 
router.get('/abc', getABC) 
router.get('/hoidanit',hoidanit)
router.get('/create',getCreatePage)
router.get('/update/:id',getUpdatePage)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
// router.post('/delete-user', postDeleteUser)
router.post('/delete-user/:id',postDeleteUser)
router.post('/delete-user',postHandleRemoveUser)





module.exports = router // export default