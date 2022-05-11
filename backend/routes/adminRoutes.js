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

const { admin } = require('../middleware/authMiddleware.js')

router
    .route('/')
    .get(admin,viewcompanies)

router
    .route('/approve/:id')
    .put(admin,approvecompany)

router
    .route('/disapprove/:id')
    .put(admin, disapprovecompany)

router
    .route('/staff/:id')
    .delete(admin, deletestaff)
    .put(editstaff)

router
    .route('/staff')
    .get(viewstaffs)
    .post(addstaff)


module.exports = router
