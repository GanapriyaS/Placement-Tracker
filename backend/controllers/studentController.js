const client= require('../config/db.js');
const viewstudentprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM student where id=$1", [req.params.id]);
        res.status(200).json(results.rows[0]);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}


const viewallstudents = async (req,res) => {
    //res.status(201).json("viewstudentprofile")
    try {
        const results = await client.query("SELECT * FROM student");
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const editstudentprofile = async (req,res) => {
    const { name, dept, batch, cgpa, rollno, skill, email, portfolio, github, linkedin, phoneno } = req.body
    try {
        const results = await client.query("SELECT * FROM student where id!=$1 and (email =$2 or portfolio=$3 or github=$4 or linkedin=$5 or phoneno=$6)", [req.params.id,email, portfolio, github, linkedin, phoneno]);
        console.log(results.rowCount)
        
            if(results.rowCount <= 0){
                const result = await client.query("update student set name=$1, dept=$2, batch=$3, cgpa=$4, rollno=$5, skill=$6, email=$7, portfolio=$8,github=$9, linkedin=$10, phoneno=$11 where id=$12", [name,dept, batch, cgpa, rollno, skill, email, portfolio, github, linkedin, phoneno,req.params.id]);
                res.status(200).json(result.rowCount)
            }
            else{
                res.status(400).json({"msg":"Try something new !! "})
            }
        
       
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
    }  
}

const viewappliedjobs = async (req,res) => {
    res.json("viewappliedjobs")
}



module.exports = {
    viewappliedjobs,
    editstudentprofile,
    viewstudentprofile,
    viewallstudents
}