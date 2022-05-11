const express = require("express");
const router = express.Router()

const { 
   login,
   companyregister,
   auth,
   getalljobs
} = require('../controllers/userController.js')



router.route('/register').post(companyregister)
router.post('/login', login)
router.post('/auth', auth)
router.get('/alljobs', getalljobs)
module.exports = router