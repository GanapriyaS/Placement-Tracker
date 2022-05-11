const express = require("express");
const {  admin, staff, student } = require( '../middleware/authMiddleware.js')
const {
    viewapplicants,
    viewjobs,
    viewcompanyprofile,
    editcompanyprofile,
    editjob,
    deleteapplicant,
    deletejob,
    addapplicant,
    addjob,
    viewjobdetails,
    hireapplicant
} = require('./../controllers/companyController.js')
const router = express.Router()

router
    .route('/:id/')
    .put(editcompanyprofile)
    .get( viewcompanyprofile)

router
    .route('/:id/job')
    .post(addjob)
    .get(viewjobs)



router
    .route('/job/:jobid')
    .delete( deletejob)
    .put(editjob)
    .get( viewjobdetails)

    
router
    .route('/:id/job/:jobid/applicants')
    .get( viewapplicants)
    .post(addapplicant)

router
    .route('/:id/job/:jobid/applicant/:studentid/hire')
    .put( hireapplicant)

router
    .route('/:id/job/:jobid/applicant/:studentid/reject')
    .put( deleteapplicant)

module.exports = router
