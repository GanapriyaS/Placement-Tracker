import React from 'react';
import {Link} from 'react-router-dom';
const studentProfile = () => {
  return (
    <>
  
    <div className="w-full h-full p-4  mt-8 overflow-y-auto ">
    <div className="flex justify-around ">
  <div className="">
    <a href="/#" className="flex items-center text-4xl font-bold">
      <span className="text-black ">Student Profile</span>
    </a>
  </div>
  <div className="">
    <Link className="py-3 px-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" to="/student/appliedjobs">View appliedjobs</Link>
  </div>
  
</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="name">Ram Lakhan</p>
        </div>
      </div>
      <div>
          <label htmlFor="batch">Department</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="dept" >computer Science and Engineering</p>
          </div>
        </div>
      
  </div>
  
<p className="font-bold">Specifications</p>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Roll no.</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="roll">12334</p>
        </div>
      </div>
      <div>
          <label htmlFor="batch">Batch</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none">2023</p>
          </div>
        </div>
      
  </div>
 
      <div>
        <label htmlFor="skills">Skills</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <ul className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="skills" >
            <li className='px-2'>Machine Learning</li>
            <li className='px-2'>Frontend</li>
            <li className='px-2'>Backend</li>
            <li className='px-2'>Data Analytics</li>
          </ul>
        </div>
      </div>
 
  
 
  <div>
          <label htmlFor="gpa">GPA</label>
          <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
               
            <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="gpa">9.2 </p>
          </div>
        </div>
      <div>
        <label htmlFor="portfolio">Portfolio</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="portfolio">ramlakshan.com</p>
        </div>
      </div>
      
      
      <div>
      <label htmlFor="git">Github</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="git">@ramlakshangit</p>
  </div>
  </div>
 
  <div>
      <label htmlFor="linkedin">Linkedin</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="linkedin" >@ramlakshan</p>
  </div>
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
             
          <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="email" >ramlakshan@gct.ac.in</p>
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone no</label>
  <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white rounded">
       
    <p className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none" id="number" >3494093204</p>
  </div>
  </div>
  </div>
 
  </form>
    </div>
    </>
  )
}

export default studentProfile