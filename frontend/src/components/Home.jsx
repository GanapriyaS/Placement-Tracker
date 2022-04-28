import React from 'react'

const Home = () => {
  return (
    <>
  
    <div className="w-full p-4 h-auto lg:h-screen pt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <div className="rounded-full bg-gray-400 px-5 ">
        <p className="text-5xl">A</p>
    </div>
    <p className="font-bold">ALex Del</p>
    <p className="bg-black rounded-full text-white py-1 px-2">District Admin</p>

</div>
<br></br><br></br>

<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="code">First Name</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="FirstName" />
        </div>
      </div>
     <div>
      <label htmlFor="number">LastName</label>
      <div className="flex items-center mb-3 bg-white rounded ml-2">
       
     <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" type="text" placeholder="LastName" />
   </div>
     </div>
  </div>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="code">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="email" placeholder="Email" />
        </div>
      </div>
     <div>
      <label htmlFor="number">Birthdate</label>
      <div className="flex items-center mb-3 bg-white rounded ml-2">
       
     <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" type="date" placeholder="Birthdate" />
   </div>
     </div>
  </div>
<br></br>
<br></br>
<p className="font-bold">Password</p>
<div>
  <label htmlFor="code">Previous Password</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
  </div>
</div>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="code">Old Password</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
        </div>
      </div>

      <div>
          <label htmlFor="code">New Password</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
          </div>
        </div>
      
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Update</button>
  </form>

    </div>
    </>
  )
}

export default Home