const client= require('../config/db.js');
const viewstaffprofile = async (req,res) => {
    res.json("getstaffprofile");
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
        
                const results = await client.query("INSERT INTO student(  name, dept, batch, cgpa, rollno, skill, email, portfolio, github, linkedin, phoneno)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [name,dept,batch,"nil",role,"nil","nil","nil","nil","nil","nil"]);
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