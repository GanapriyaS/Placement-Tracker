// import jwt from 'jsonwebtoken'

const admin = async (req, res, next) => {
    
//     const token = req.headers["x-access-token"]
//   // console.log(token);
//   if(!token){
//     res.json({auth:false, message:"fails"});
//   }
//   else{
//     jwt.verify(token,"vscode",(err,decoded) => {
//       if(err){
//         res.json({auth:false, message:"fails"});
//       }
//       else{
//         req.data = decoded.id;
        
//         next()
//       }
//     })
//   }
next()
  
}


module.exports = { admin } 