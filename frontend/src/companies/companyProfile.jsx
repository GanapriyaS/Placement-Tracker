import React from 'react'
import {Link} from 'react-router-dom';
const companyProfile = () => {
  return (
    <>
  
    <div className="w-full lg:h-screen p-4  mt-8 overflow-y-auto ">
    <div className="lg:flex justify-around ">
  <div className="">
    <a href="/#" className="flex items-center text-4xl  font-bold">
      <span className="text-black ">Company Profile</span>
    </a>
  </div>
  <div className="mt-4 md:mt-0 flex">
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/companies/jobs/view">View Jobs</Link>
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/companies/jobs/add">Add Jobs</Link>
    <Link className="py-2 px-3 text-sm bg-black mb-1 hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/companies/editprofile">Edit Profile</Link>
  </div>
  
</div>
<br></br><br></br>

<div className=" lg:py-0 py-1  grid justify-center px-2 md:px-10" >
  <p className="font-bold">Profile</p>
  <div className="grid grid-cols-1   mb-3 ">
      <div>
        <label htmlFor="name">Name</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-auto pl-4 pr-6 py-4  rounded  focus:outline-none " id="name">TVS Company  </p>
        </div>
      </div>
      <div>
          <label htmlFor="desc">Description</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white">
               
            <p className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none " id="desc">TVS and Suzuki shared a one-year-long relationship that was aimed at technology transfer for design and manufacture of two-wheelers specifically for the Indian market. Re-christened TVS-Suzuki, the company brought out several models such as the Suzuki Supra, Suzuki Samurai, Suzuki Shogun and Suzuki Shaolin. In 2001, after separating ways with Suzuki, the company was renamed TVS Motor, relinquishing its rights to use the Suzuki name. There was also a 30-month moratorium period during which Suzuki promised not to enter the Indian market with competing two-wheelers.</p>
          </div>
        </div>
      
  </div>




  
  

<p className="font-bold mt-4">Specifications</p>

  <div className="grid grid-cols-1 lg:grid-cols-2  mb-3 ">
      <div>
        <label htmlFor="domain">Domain</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white" id="domain">IT Sector</p>
        </div>
      </div>

      <div>
          <label htmlFor="package">Package</label>
          <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
               
            <p className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white" id="package">$450 - $500</p>
          </div>
        </div>
      
  </div>
  <p className="font-bold mt-4">Contact details</p>
  <div className="grid grid-cols-1 lg:grid-cols-2    mb-3 ">
  <div>
        <label htmlFor="email">Website</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <a className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white" id="web" href="www.tvs.com">www.tvs.com</a>
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
             
          <p className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white" id="email">ranjith@gmail.com</p>
        </div>
      </div>


      
      <div>
      <label htmlFor="number">Phone number</label>
  <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
       
    <p className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white" id="number">91235234324</p>
  </div>
  </div>
  </div>
 
 
  
   
  
  </div>
    </div>
    </>
  )
}

export default companyProfile