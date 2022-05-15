const express = require("express");

const app = express();

const cors = require("cors");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    next();
  });

const { notFound, errorHandler }= require('./middleware/errorMiddlware.js')
const staffRoutes= require('./routes/staffRoutes.js')
const companyRoutes= require('./routes/companyRoutes.js')
const studentRoutes= require('./routes/studentRoutes.js')
const adminRoutes= require('./routes/adminRoutes.js')
const userRoutes= require('./routes/userRoutes.js')





app.use('/', userRoutes);
app.use('/staff', staffRoutes);
app.use('/company', companyRoutes);
app.use('/student',studentRoutes);
app.use('/admin', adminRoutes);

app


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    function () {
        console.log('Server is running.. on Port 5000');
    }
);

