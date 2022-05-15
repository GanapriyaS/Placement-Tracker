const uuid = require('uuid');
const client= require('../config/db.js');
const nodemailer=require('nodemailer')
// const mailgun = require('mailgun-js');



const viewstaffprofile = async (req,res) => {
    try {
        const results = await client.query("SELECT * FROM staff where id=$1", [req.params.id]);
        console.log(req.params.id, results.rows[0])
        res.status(200).json(results.rows[0]);
        
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
        await client.query("DELETE FROM login  where key=$1 and type=$2", [req.params.id,"student"]);
        console.log(result)
        res.status(200).json(result.rowCount);
      } catch (err) {
        console.log(err)
        res.status(500).json({"msg":"Server Error"})
      }
}

const addstudent =async (req,res) => {
    const { name, dept, role, batch,email } = req.body
      
       try {
        const results = await client.query("SELECT * FROM student where rollno=$1", [role]);
        console.log(results.rowCount)
        if(results.rowCount <= 0){
        const uid = uuid.v1()
                const results = await client.query("INSERT INTO student( id, name, dept, batch, cgpa, rollno, skill, email, portfolio, github, linkedin, phoneno)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)", [uid,name,dept,batch,"nil",role,"nil",email,"nil","nil","nil","nil"]);
                if(results.rowCount===1){
                    await client.query("INSERT INTO login( username,pass, key, type)VALUES($1,$2,$3,$4)", [uid,"gct",uid,"student"]);
                }

              //   let transporter = nodemailer.createTransport({
              //     host: "smtp.ethereal.email",
              //     port: 587,
              //     secure: false, // true for 465, false for other ports
                  
              // auth: {
              //     user: 'carleton.rogahn93@ethereal.email',
              //     pass: '7Rb5BNSNQ2yFm1qKWy'
              // },
              //   });
              // const msg={
              //   from: '"GCT - Comibatore" <ganapriyakheersagar@gmail.com>', // sender address
              //   to: email, // list of receivers
              //   subject: "Regarding Authentication of Placement Tracker✔", // Subject line
              //   text: "Username : "+uid +"\nPassword : gct", // plain text body
              //   // html: "<b></b>", // html body
              // }
              //   // send mail with defined transport object
              //   let info = await transporter.sendMail(msg);
              
              //   console.log("Message sent: %s", info.messageId);
              //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
              
              //   // Preview only available when sending through an Ethereal account
              //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          
              
              // var mailgun = require('mailgun-js')
              //   ({apiKey: "9cf08b95bf8b1ea8a0aa26cf9fae2f67-2fbe671d-fab0faf7", domain: "sandbox42f7641e9b7d41808aa7e0a675ed41e9.mailgun.org"});
              
              //   var sender_email = 'ganapriyakheersagar@gmail.com'
              // var receiver_email = email
              // var email_subject = 'Regarding Authentication of Placement Tracker'
              // var email_body = "Username : "+uid +"\nPassword : gct"

              // sendMail = function(sender_email, receiver_email,
              //     email_subject, email_body){
              
              // const data = {
              //   "from": sender_email,
              //   "to": receiver_email,
              //   "subject": email_subject,
              //   "text": email_body
              // };
              
              // mailgun.messages().send(data, (error, body) => {
              //   if(error) console.log(error)
              //   else console.log(body);
              //   console.log(body)
              // });
              // }
              
              // // User-defined function to send email
              // sendMail(sender_email, receiver_email,
              //       email_subject, email_body)
              

              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'ganapriyakheersagar@gmail.com',
                  pass: 'yulricdeuptjhypg',
                },
              });
              
              
              transporter.sendMail({
                from: '"Ganapriya S" <ganapriyakheersagar@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Regarding Authentication of Placement Tracker ✔", // Subject line
                text: "Username : "+uid +"\nPassword : gct", // plain text body
              
              }).then(info => {
                console.log({info});
              }).catch(console.error);
                res.status(201).json(results.rowCount)
              }
              else{
                res.status(400).json({"msg":"Already existing rollno "})
              }
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