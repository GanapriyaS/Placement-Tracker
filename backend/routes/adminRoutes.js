const express = require("express");
const router = express.Router()

const {
    viewstaffs,
    addstaff,
    deletestaff,
    editstaff,
    approvecompany,
    disapprovecompany,
    viewcompanies,
} = require('./../controllers/adminController.js')

// const { admin } = require('../middleware/authMiddleware.js')

router
    .route('/')
    .get(viewcompanies)

router
    .route('/approve/:id')
    .post(approvecompany)

router
    .route('/disapprove/:id')
    .put( disapprovecompany)

router
    .route('/staff/:id')
    .delete( deletestaff)
    .put(editstaff)

router
    .route('/staff')
    .get(viewstaffs)
    .post(addstaff)


module.exports = router
