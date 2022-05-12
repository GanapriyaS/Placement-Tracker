import React from 'react'

const addJobs = () => {
  const handleChange = (e) => {
    console.log("hello")
  };
  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Add jobs</p>

</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="role">Role</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="roll" name="roll" onChange={handleChange} required type="text" placeholder="job title" />
        </div>
      </div>
      <div>
          <label htmlFor="req">Requirement</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="req" name="req" onChange={handleChange} required type="text" placeholder="requirement" />
          </div>
        </div>
      
  </div>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="domain">Domain</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="domain" type="text" placeholder="domain" />
        </div>
      </div>

      <div>
          <label htmlFor="ldate">Last date to apply</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="ldate" type="date" placeholder="last date" />
          </div>
        </div>
      
  </div>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="type">Type</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="type" type="text" placeholder="intern/full-time" />
        </div>
      </div>
      
      <div>
      <label htmlFor="mode">Mode</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="mode" type="text" placeholder="online/offline" />
  </div>
  </div>
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Add</button>
  </form>
    </div>
    </>
  )
}

export default addJobs