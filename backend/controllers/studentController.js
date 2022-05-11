const client= require('../config/db.js');
const viewstudentprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM student where id=$1", [req.params.id]);
        res.status(200).json(results.rows);
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
    res.json("editstudentprofile")
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