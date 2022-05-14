import React,{useContext, useState, useEffect} from 'react';
import {Link,  useParams} from 'react-router-dom';
import {LoginContext} from '../App.js';
import axios from 'axios'

const StaffProfile = (props) => {
  const params = useParams();
    console.log(params.staff)
  const {auth,kind,msg} = useContext(LoginContext);
  console.log(auth,kind,msg)
  
const [profile, getProfile] = useState([]);
    // const url = "https://placement-tracker-swart.vercel.app/admin/";
    const url = "http://localhost:5000/staff/" + params.staff;
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
  
    <div className="w-full lg:h-screen p-4  mt-8 overflow-y-auto ">
    <div className="lg:flex justify-around ">
  <div className="">
    <a href="/#" className="flex items-center text-4xl  font-bold">
      <span className="text-black ">Staff Profile</span>
    </a>
  </div>
  <div className="mt-4 md:mt-0 flex">
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/staff/student/view">View Students</Link>
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/staff/student/add">Add Students</Link>
    <Link className="py-2 px-3 text-sm bg-black mb-1 hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/staff/editprofile" state={{data:profile}}>Edit Profile</Link>
  </div>
  
</div>
<br></br><br></br>

<form className=" lg:py-0 py-1  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="grid grid-cols-1 lg:grid-cols-2   mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-auto pl-4 pr-6 py-4 font-bold rounded  focus:outline-none " id="name">{profile.name}  </p>
        </div>
      </div>
      <div>
          <label htmlFor="batch">Department</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none " id="dept">{profile.dept}</p>
          </div>
        </div>
      
  </div>




  
  

<p className="font-bold mt-4">Specifications</p>

  <div className="grid grid-cols-1 lg:grid-cols-2  mb-3 ">
      <div>
        <label htmlFor="role">Role</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none shadow-lg shadow-white" id="role">{profile.job}</p>
        </div>
      </div>

      <div>
          <label htmlFor="qual">Qualification</label>
          <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none shadow-lg shadow-white" id="qual">{profile.qualification}</p>
          </div>
        </div>
      
  </div>
  <p className="font-bold mt-4">Contact details</p>
  <div className="grid grid-cols-1 lg:grid-cols-2    mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none shadow-lg shadow-white" id="email">{profile.email}</p>
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone number</label>
  <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none shadow-lg shadow-white" id="number">{profile.phoneno}</p>
  </div>
  </div>
  </div>
 
 
  
   
  
  </form>
    </div>
    </>
  )
}

export default StaffProfile