const uuid = require('uuid');
const client= require('../config/db.js');
const viewstaffprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM staff where id=$1", [req.params.id]);
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const editstaffprofile =  async (req,res) => {
    const { name, dept, role, qual,email,number } = req.body
    try {
        const results = await client.query("SELECT * FROM staff where email=$1 and id!=$2", [email,req.params.id]);
        console.log(results.rowCount)
        if(results.rowCount <= 0){
            const result = await client.query("SELECT * FROM staff where phoneno=$1 and id!=$2", [number,req.params.id]);
            if(results.rowCount <= 0){
                const result = await client.query("update staff set name=$1, dept=$2, qualification=$3, job=$4, email=$5, phoneno=$6 where id=$7", [name,dept,role,qual,email,number,req.params.id]);
                res.status(200).json(result.rowCount)
            }
            else{
                res.status(400).json({"msg":"Already existing phoneno !! Try another number "})
            }
        }
        else{
            res.status(400).json({"msg":"Already existing mailID !! Try another mail id "})
        }
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
    }  
}



const deletestudent = async (req,res) => {
    try {
        const result = await client.query("DELETE FROM student WHERE id=$1", [req.params.id]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const addstudent =async (req,res) => {
    const { name, dept, role, batch } = req.body
       console.log(req.body)
       try {
        const uid = uuid.v1()
                const results = await client.query("INSERT INTO student( id, name, dept, batch, cgpa, rollno, skill, email, portfolio, github, linkedin, phoneno)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)", [uid,name,dept,batch,"nil",role,"nil",uid,uid,uid,uid,uid]);
                if(results.rowCount===1){
                    await client.query("INSERT INTO login( username,pass, key, type)VALUES($1,$2,$3,$4)", [uid,"gct",uid,"student"]);
                }
                res.status(201).json(results.rowCount)
    
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    
}

const viewstudents =async (req,res) => {
    //res.status(201).json("addStudent")
    try {
        const results = await client.query("SELECT * FROM student");
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const editstudent = async (req,res) => {
    const { name, dept, batch, rollno } = req.body
    try {
        
                const result = await client.query("update student set name=$1, dept=$2, batch=$3, cgpa=$4, rollno=$5, skill=$6, email=$7, portfolio=$8,github=$9, linkedin=$10, phoneno=$11 where id=$12", [name,dept, batch, "cgpa", rollno,"skill", req.params.id, req.params.id,req.params.id, req.params.id, req.params.id,req.params.id]);
                res.status(200).json(result.rowCount)
           
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
    }  
}

module.exports = {
    addstudent,
    editstudent,
    deletestudent,
    editstaffprofile,
    viewstaffprofile,
    viewstudents
}