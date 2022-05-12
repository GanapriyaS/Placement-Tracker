import React from 'react'

const editStudentProfile = () => {
  const handleChange = (e) => {
    console.log("hello")
  };
  return (
    <>
  
    <div className="w-full h-full p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Edit profile</p>

</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" name="name" onChange={handleChange} required type="text" placeholder="Name" />
        </div>
      </div>
      <div>
          <label htmlFor="batch">Department</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="dept" name="dept" onChange={handleChange} required type="text" placeholder="department" />
          </div>
        </div>
      
  </div>
  
<p className="font-bold">Specifications</p>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Roll no.</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="roll" name="roll" onChange={handleChange} required type="text" placeholder="roll no" />
        </div>
      </div>
      <div>
          <label htmlFor="batch">Batch</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="batch" name="batch" onChange={handleChange} required type="text" placeholder="batch" />
          </div>
        </div>
      
  </div>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="skills">Skills</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="skills" name="skills" onChange={handleChange} required type="text" placeholder="skills" />
        </div>
      </div>
      <div>
          <label htmlFor="gpa">GPA</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="gpa" name="gpa" onChange={handleChange} required type="text" placeholder="GPA" />
          </div>
        </div>
      
  </div>
  
 
  
      <div>
        <label htmlFor="portfolio">Portfolio</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="portfolio" name="portfolio" onChange={handleChange} required type="url" placeholder="portfolio link" />
        </div>
      </div>
      
      
      <div>
      <label htmlFor="git">Github</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="git" name="git" onChange={handleChange} required type="url" placeholder="github link" />
  </div>
  </div>
 
  <div>
      <label htmlFor="linkedin">Linkedin</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="linkedin" name="linkedin" onChange={handleChange} required type="url" placeholder="linkedin link" />
  </div>
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="email" name="email" onChange={handleChange} required type="email" placeholder="email" />
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone no</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" name="number" onChange={handleChange} required type="text" placeholder="phone number" />
  </div>
  </div>
  </div>
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Edit</button>
  </form>
    </div>
    </>
  )
}

export default editStudentProfile