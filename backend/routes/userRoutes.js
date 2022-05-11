const express = require("express");
const router = express.Router()

const { 
   login,
   companyregister,
   auth,
   getalljobs,
   home
} = require('../controllers/userController.js')



router.route('/register').post(companyregister)
router.post('/login', login)
router.post('/auth', auth)
router.get('/alljobs', getalljobs)
router.get('/', home)
module.exports = router