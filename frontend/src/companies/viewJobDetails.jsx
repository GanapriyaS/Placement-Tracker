import React from 'react'

const viewJobDetails = () => {
  return (
    <div className="w-full h-full p-4  mt-8 overflow-y-auto ">
    <div class="grid justify-items-center ">
    
    <div class="rounded-full bg-gray-400 px-5 ">
        <p class="text-5xl">A</p>
    </div>
    <p class="font-bold">ALex Del</p>
    <p class="bg-black rounded-full text-white py-1 px-2">District Admin</p>

</div>
<br></br><br></br>

<form class=" lg:py-0 py-5  grid justify-center" action="#">
  <p class="font-bold">Profile</p>
  <div class="flex items-center mb-3 ">
      <div>
        <label for="code">First Name</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="FirstName" />
        </div>
      </div>
     <div>
      <label for="number">LastName</label>
      <div class="flex items-center mb-3 bg-white rounded ml-2">
       
     <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" type="text" placeholder="LastName" />
   </div>
     </div>
  </div>

  <div class="flex items-center mb-3 ">
      <div>
        <label for="code">Email</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="email" placeholder="Email" />
        </div>
      </div>
     <div>
      <label for="number">Birthdate</label>
      <div class="flex items-center mb-3 bg-white rounded ml-2">
       
     <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="number" type="date" placeholder="Birthdate" />
   </div>
     </div>
  </div>
<br></br>
<br></br>
<p class="font-bold">Password</p>
<div>
  <label for="code">Previous Password</label>
  <div class="flex items-center mb-3 bg-white rounded mr-2">
       
    <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
  </div>
</div>
  <div class="flex items-center mb-3 ">
      <div>
        <label for="code">Old Password</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
        </div>
      </div>

      <div>
          <label for="code">New Password</label>
          <div class="flex items-center mb-3 bg-white rounded mr-2">
               
            <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="code" type="text" placeholder="PhoneNumber" />
          </div>
        </div>
      
  </div>
 
 
  
   
    <br></br>
    <button class="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Update</button>
  </form>
    </div>
  )
}

export default viewJobDetails