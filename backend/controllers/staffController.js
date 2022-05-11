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
    if(true) {
        res.json("editstaffprofile");
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
}


const deletestudent = async (req,res) => {

    if(true) {
        res.json({ message: 'Consumer product removed' });
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
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
    // const { prod_name, price, image, seller_name, prod_size, quantity, avalaible_location } = req.body
    if (true) {
        res.status(201).json("editstudent")
    } else {
        res.status(401)
        throw new Error('Product not found')
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