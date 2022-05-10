const express = require("express");
const connectDB= require('./config/db.js');

const { notFound, errorHandler }= require('./middleware/errorMiddlware.js')
const staffRoutes= require('./routes/staffRoutes.js')
const companyRoutes= require('./routes/companyRoutes.js')
const studentRoutes= require('./routes/studentRoutes.js')
const adminRoutes= require('./routes/adminRoutes.js')
const userRoutes= require('./routes/userRoutes.js')




const app = express();

const cors = require("cors");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

connectDB();


app.use('/', userRoutes);
app.use('/staff', staffRoutes);
app.use('/company', companyRoutes);
app.use('/student',studentRoutes);
app.use('/companies', companyRoutes);
app.use('/admin', adminRoutes);


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    function () {
        console.log('Server is running.. on Port 5000');
    }
);

