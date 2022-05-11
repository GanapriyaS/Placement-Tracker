const express = require("express");
const router = express.Router()

const { 
    addstudent,
    editstudent,
    deletestudent,
    editstaffprofile,
    viewstaffprofile,
    viewstudents
} = require('../controllers/staffController.js')
const { admin } = ('../middleware/authMiddleware.js')

router.route('/student').post( addstudent).get( viewstudents)
router.route('/:id').get(viewstaffprofile).put(editstaffprofile)
router.route('/student/:id').put(editstudent).delete(deletestudent)

module.exports = router