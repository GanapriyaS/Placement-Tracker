const express = require("express");
const router = express.Router()

const { 
    viewappliedjobs,
    editstudentprofile,
    viewstudentprofile,
    viewallstudents
} = require('../controllers/studentController.js')
const { student,admin } =  require('../middleware/authMiddleware.js')

router.route('/:id').get(viewstudentprofile).put(editstudentprofile)
router.route('/').get(viewallstudents)
router.route('/:id/jobs').get(viewappliedjobs)

module.exports = router