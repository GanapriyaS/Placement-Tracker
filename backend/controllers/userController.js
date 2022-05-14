const client= require('../config/db.js');
const jwt = require("jsonwebtoken")
const login = async (req,res) => {

    const {username,password,type} = req.body;
    try {
        const results = await client.query("SELECT * FROM login WHERE username=$1 and pass=$2 and type=$3", [username,password,type]);
        if(results.rowCount > 0){
            const id = results.rows[0].key

            const data = { id:id, type:results.rows[0].type}
            const token =jwt.sign({data}, "vscode", {
                expiresIn: '30d'
            });
              res.status(200).json({auth:true, token :token, result:results.rows});
        }
        else{
            res.status(400).json({"msg":"Wrong username/password combination!"})
        }
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}
const home = async (req,res) => {
    res.json({"Hi":"Helloworld"})
}
const auth = async (req,res) => {
    const token = req.body.id
    let decode='';
  
  if(!token){
    res.status(400).json({auth:false, message:"fails"});
  }
  else{
    decode = jwt.verify(token, 'vscode');

        req.data = decode.data;
       
        res.status(200).json({auth:true, message:"success",data:decode.data});
      }
    
    
  }





const companyregister = async (req,res) => {
    const { name,  description, department, package, website, email, phoneno } = req.body
    console.log(req.body)
    try {
     const results = await client.query("SELECT * FROM company where email=$1 or website=$2", [email,website]);
     console.log(results.rowCount)
     if(results.rowCount <= 0){
         const results = await client.query("SELECT * FROM company where phoneno=$1", [phoneno]);
         if(results.rowCount <= 0){
          
             const results = await client.query("INSERT INTO company(name,  description, department, package, website, email, phoneno,approval)VALUES($1,$2,$3,$4,$5,$6,$7,$8)", [name,  description, department, package, website, email, phoneno,false]);
            
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

const getalljobs = async (req,res) => {
    try {
        const results = await client.query("SELECT  jobs.*, company.name as companyname FROM jobs INNER JOIN company ON jobs.companyname=company.id");
 
        res.status(200).json(results.rows);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
    }



module.exports = {
    login,
    companyregister,
    auth,
    getalljobs,
    home
}