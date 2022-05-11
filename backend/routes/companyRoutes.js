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
    .route('/:id/')
    .put(editcompanyprofile)
    .get( viewcompanprofile)

router
    .route('/:id/job')
    .post(addjob)
    .get(viewjobs)

router
    .route('/alljobs')
    .get(viewalljobs)

router
    .route('/job/:jobid')
    .delete( deletejob)
    .put(editjob)
    .get( viewjobdetails)

    
router
    .route('/:id/job/:jobid/applicants')
    .get( viewapplicants)

router
    .route('/:id/job/:jobid/applicant/:id/hire')
    .put( hireapplicant)

router
    .route('/:id/job/:jobid/applicant/:id/reject')
    .put( deleteapplicant)

module.exports = router
