const express = require("express");
const router = express.Router()

const { 
   login,
   companyregister,
   auth
} = require('../controllers/userController.js')



router.route('/register').post(companyregister)
router.post('/login', login)
router.post('/auth', auth)
module.exports = router