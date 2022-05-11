const client= require('../config/db.js');
const viewcompanies = async (req,res) => {
    res.json("getSeedProducts");
}

const disapprovecompany = async (req,res) => {

    if (true) {
        res.json({ message: "Product removed" });
    } else {
        res.status(404)
        throw new Error('Seed not Found')
    }
}

const approvecompany = async (req,res) => {
    res.status(201).json("approvecompany")
}

const deletestaff = async (req,res) => {
    try {
        const result = await client.query("DELETE FROM staff WHERE id=$1", [
          req.params.id
        ]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const addstaff =async (req,res) => {
       const { name, dept, role, qual,email,number } = req.body
       console.log(req.body)
       try {
        const results = await client.query("SELECT * FROM staff where email=$1", [email]);
        console.log(results.rowCount)
        if(results.rowCount <= 0){
            const results = await client.query("SELECT * FROM staff where phoneno=$1", [number]);
            if(results.rowCount <= 0){
                const results = await client.query("INSERT INTO staff( name, dept, qualification, job, email, phoneno)VALUES($1,$2,$3,$4,$5,$6)", [name,dept,role,qual,email,number]);
                res.status(201).json(results.rowCount)
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

const editstaff = async (req,res) => {
    
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

const viewstaffs =async (req,res) => {
    //   client.query({
    //       name: 'insert',
    //       text: "INSERT INTO company(name, description, department, package, website, email, phoneno, approval) values($1, $2, $3, $4, $5, $6, $7, $8)",
    //       values: ['Nextcompany', 'This priys', 'Data analytics', '45000', 'www.pan4kkkbbnbnn1y.com', 'niu4mmuuy@gmail.com', '1091925', true]
    //   });
    try {
        const results = await client.query("SELECT * FROM staff");
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

module.exports = {
    viewstaffs,
    addstaff,
    deletestaff,
    editstaff,
    approvecompany,
    disapprovecompany,
    viewcompanies,
}