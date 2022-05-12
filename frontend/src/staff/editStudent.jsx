import React from 'react'

const editStudent = () => {
  const handleChange = (e) => {
    console.log("hello")
  };
  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
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
  <p className="font-bold">Credentials</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="username">Username</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="username" name="username" onChange={handleChange} required type="text" placeholder="username" />
        </div>
      </div>
      
      <div>
      <label htmlFor="pwd">Password</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="pwd" name="pwd" onChange={handleChange} required type="password" placeholder="password" />
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

export default editStudent