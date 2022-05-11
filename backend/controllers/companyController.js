const client= require('../config/db.js');
const viewjobs = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM jobs where companyname=$1", [req.params.jobid]);
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const viewalljobs = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM jobs");
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const addapplicant = async (req,res) => {
    res.json("applicants");
}

const viewapplicants = async (req,res) => {
    res.json("applicants");
}

const viewcompanyprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM company where id=$1", [req.params.id]);
        res.status(200).json(results.rows);
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
    // const lendMachine = await ProductLendMachines.findById(req.params.id);

    if(true) {
        res.json({ message: ' Removed' });
    } else {
        res.status(404)
        throw new Error('Machine not Found')
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
        const results = await client.query("SELECT * FROM jobs where id=$1", [req.params.jobid]);
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    }

const hireapplicant = async (req,res) => {
    res.json("viewjobdetails")
}

module.exports = { 
    viewapplicants,
    viewjobs,
    viewcompanyprofile,
    viewalljobs,
    addapplicant,
    editcompanyprofile,
    editjob,
    deleteapplicant,
    deletejob,
    addjob,
    viewjobdetails,
    hireapplicant
}