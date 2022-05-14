import React from 'react'

const registerCompanies = () => {
  const handleChange = (e) => {
    console.log("hello")
  };
  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Registration</p>

</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" name="name" onChange={handleChange} required type="text" placeholder="Name" />
        </div>
      </div>
      <div>
      <label htmlFor="desc">Description</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
          <textarea className="w-full  pl-4 pr-6 py-1 font-bold rounded resize-y rounded-md focus:outline-none bg-white" row="1" id="desc" name="desc" onChange={handleChange} required />
          </div>
        </div>
      
  </div>
     
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="email" name="email" onChange={handleChange} required type="email" placeholder="Email" />
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone number</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" name="number" onChange={handleChange} required type="text" placeholder="PhoneNumber" />
  </div>
  </div>
  </div>
<br></br>
<br></br>
<p className="font-bold">Specifications</p>
<div>
  <label htmlFor="domain">Domain</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="domain" name="domain" onChange={handleChange} required type="text" placeholder="domain" />
  </div>
</div>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="package">Package</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="package" name="package" onChange={handleChange} required type="text" placeholder="package" />
        </div>
      </div>

      <div>
          <label htmlFor="site">Website</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="site" name="site" onChange={handleChange} required type="url" placeholder="website" />
          </div>
        </div>
      
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Register</button>
  </form>
    </div>
    </>
  )
}

export default registerCompanies
