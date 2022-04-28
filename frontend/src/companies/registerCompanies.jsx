import React from 'react'

const registerCompanies = () => {
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
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" type="text" placeholder="Name" />
        </div>
      </div>
      <div>
      <label for="desc">Description</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
          <textarea className="w-full  pl-4 pr-6 py-1 font-bold rounded resize-y rounded-md focus:outline-none bg-white" row="1" id="desc" />
          </div>
        </div>
      
  </div>
     
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label for="email">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="email" type="email" placeholder="Email" />
        </div>
      </div>
      
      <div>
      <label for="number">Phone number</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" type="text" placeholder="PhoneNumber" />
  </div>
  </div>
  </div>
<br></br>
<br></br>
<p className="font-bold">Specifications</p>
<div>
  <label for="domain">Domain</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="domain" type="text" placeholder="domain" />
  </div>
</div>
  <div className="flex items-center mb-3 ">
      <div>
        <label for="package">Package</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="package" type="text" placeholder="package" />
        </div>
      </div>

      <div>
          <label for="site">Website</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="site" type="url" placeholder="website" />
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
