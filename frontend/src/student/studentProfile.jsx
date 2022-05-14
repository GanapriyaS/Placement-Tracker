import React,{useContext, useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {LoginContext} from '../App.js';
import axios from 'axios'


const StudentProfile = (props) => {
  const params = useParams();
    console.log(params.student)
  const {auth,kind,msg} = useContext(LoginContext);
  console.log(auth,kind,msg)
  
const [profile, getProfile] = useState([]);
    // const url = "https://placement-tracker-swart.vercel.app/admin/";
    const url = "http://localhost:5000/company/" + params.student;
    console.log(url)
    const getAllProfile = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }})
        .then((response) => {
            const allProfile = response.data
            console.log(allProfile)
            getProfile(allProfile);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getAllProfile();
    }, [])

  return (
    <>
  
    <div className="w-full h-full p-4  mt-8 overflow-y-auto ">
    <div className="flex justify-around ">
  <div className="">
    <a href="/#" className="flex items-center text-4xl font-bold">
      <span className="text-black ">Student Profile</span>
    </a>
  </div>
  <div className="grid lg:flex">
    <Link className="py-3 px-4 mr-1 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" to="/student/appliedjobs">View&nbsp;appliedjobs</Link>
    <Link className="py-3 px-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" to="/student/editprofile">EditProfile</Link>
  </div>
  
</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="name">{profile.name}</p>
        </div>
      </div>
      <div>
          <label htmlFor="batch">Department</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="dept" >{profile.dept}</p>
          </div>
        </div>
      
  </div>
  
<p className="font-bold">Specifications</p>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Roll no.</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="roll">{profile.rollno}</p>
        </div>
      </div>
      <div>
          <label htmlFor="batch">Batch</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none">{profile.batch}</p>
          </div>
        </div>
      
  </div>
 
      <div>
        <label htmlFor="skills">Skills</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
        <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none">{profile.skill}</p>
        </div>
      </div>
 
  
 
  <div>
          <label htmlFor="gpa">GPA</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="gpa">{profile.cgpa}</p>
          </div>
        </div>
      <div>
        <label htmlFor="portfolio">Portfolio</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="portfolio">{profile.portfolio}</p>
        </div>
      </div>
      
      
      <div>
      <label htmlFor="git">Github</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="git">{profile.github}</p>
  </div>
  </div>
 
  <div>
      <label htmlFor="linkedin">Linkedin</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="linkedin" >{profile.linkedin}</p>
  </div>
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="email" >{profile.email}</p>
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone no</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="number" >{profile.phoneno}</p>
  </div>
  </div>
  </div>
 
  </form>
    </div>
    </>
  )
}

export default StudentProfile