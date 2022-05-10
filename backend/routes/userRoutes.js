const express = require("express");
const router = express.Router()

const { 
   login,
   companyregister
} = require('../controllers/userController.js')



router.route('/register').post(companyregister)
router.post('/login', login)

module.exports = router