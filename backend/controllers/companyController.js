const client= require('../config/db.js');
const viewjobs = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM jobs where companyname=$1", [req.params.id]);
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}



const addapplicant = async (req,res) => {
    const { studentid } = req.body
    
    
    console.log(req.params)
    try {
     const results = await client.query("SELECT * FROM application where student_id=$1 and job_id=$2", [studentid,req.params.jobid]);
     console.log(results.rowCount)
     
         if(results.rowCount <= 0){
            
             const results = await client.query("INSERT INTO application( student_id,job_id,hire)VALUES($1,$2,$3)", [studentid,req.params.jobid,"pending"]);
             res.status(201).json(results.rowCount)
         }
     else{
         res.status(400).json({"msg":"Already applied !! "})
     }
   } catch (err) {
     console.log(err)
     res.status(500).json({"msg":"Server Error"})
   }
}

const viewapplicants = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM student where id in (select student_id from application where job_id=$1 and hire=$2)", [req.params.jobid,"pending"]);
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    }


const viewcompanyprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM company where id=$1", [req.params.id]);
        res.status(200).json(results.rows[0]);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    }


const editcompanyprofile = async (req,res) => {
    const { name, description, department, package, website, email, phoneno } = req.body
    try {
        const result = await client.query("update company set name=$1, description=$2, department=$3, package=$4,website=$5, email=$6, phoneno=$7 where id=$8", [name, description, department, package, website, email, phoneno,req.params.id]);
        res.status(200).json(result.rowCount)
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
    }
}


const deletejob = async (req,res) => {
    try {
        const result = await client.query("DELETE FROM jobs WHERE id=$1", [req.params.jobid]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const deleteapplicant = async (req,res) => {
    try {
        const result = await client.query("update application set hire=$1 WHERE job_id=$2 and student_id=$3", ["rejected",req.params.jobid,req.params.studentid]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const addjob =  async (req,res) => {
    const { role,requ,domain,ldate,type,mode } = req.body
    console.log(req.body)
    try {
        const results = await client.query("INSERT INTO jobs( name, req, dept, lastdate, intern, online, companyname)VALUES($1,$2,$3,$4,$5,$6,$7)", [ role,requ,domain,ldate,type,mode,req.params.id]);
        res.status(201).json(results.rowCount)
   } catch (err) {
     console.log(err)
     res.status(500).json({"msg":"Server Error"})
   }
}

const editjob =  async (req,res) => {
    const { role,requ,domain,ldate,type,mode } = req.body
    try {
            const result = await client.query("update jobs set name=$1, req=$2, dept=$3, lastdate=$4, intern=$5, online=$6 where id=$7", [role,requ,domain,ldate,type,mode,req.params.jobid]);
            res.status(200).json(result.rowCount)
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
    }
}

const viewjobdetails = async (req,res) => {
    try {
        const result1 = await client.query("SELECT  jobs.*, company.name as companyname,company.website,company.description  FROM jobs INNER JOIN company ON jobs.companyname=company.id WHERE jobs.id=$1", [req.params.jobid]);
        // const result2 = await client.query("SELECT name FROM company where id=$1", [req.params.id]);
        // result1.rows[0].company=result2.rows[0]
        console.log(result1.rows)
        res.status(200).json(result1.rows[0]);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    }

const hireapplicant = async (req,res) => {
    try {
        const result = await client.query("update application set hire=$1 WHERE job_id=$2 and student_id=$3", ["hired",req.params.jobid,req.params.studentid]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

module.exports = { 
    viewapplicants,
    viewjobs,
    viewcompanyprofile,
    addapplicant,
    editcompanyprofile,
    editjob,
    deleteapplicant,
    deletejob,
    addjob,
    viewjobdetails,
    hireapplicant
}