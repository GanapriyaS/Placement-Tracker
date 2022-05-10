const express = require("express");
const {  admin, staff, student } = require( '../middleware/authMiddleware.js')
const {
    viewapplicants,
    viewjobs,
    viewcompanprofile,
    viewalljobs,
    editcompanyprofile,
    editjob,
    deleteapplicant,
    deletejob,
    addjob,
    viewjobdetails,
    hireapplicant
} = require('./../controllers/companyController.js')
const router = express.Router()

router
    .route('/')
    .put(editcompanyprofile)
    .get( viewcompanprofile)

router
    .route('/job')
    .post(addjob)
    .get(viewjobs)

router
    .route('/alljobs')
    .get(viewalljobs)

router
    .route('/job/:id')
    .delete( deletejob)
    .put(editjob)
    .get( viewjobdetails)

    
router
    .route('/job/:id/applicants')
    .get( viewapplicants)

router
    .route('/job/:id/applicants/:id/hire')
    .put( hireapplicant)

router
    .route('/job/:id/applicants/:id/reject')
    .put( deleteapplicant)

module.exports = router
