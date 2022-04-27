import React from 'react'

const Home = () => {
  return (
    <>
  
    <div className="w-full h-full p-4  mt-8 overflow-y-auto ">
    <div class="grid justify-items-center ">
    
    <p class="bg-black rounded-full text-white py-3 px-4">Edit profile</p>

</div>
<br></br><br></br>

<form class=" lg:py-0 py-5  grid justify-center" action="#">
  <p class="font-bold">Profile</p>
  <div class="flex items-center mb-3 ">
      <div>
        <label for="name">Name</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" type="text" placeholder="Name" />
        </div>
      </div>
     <div>
      <label for="dept">Department</label>
      <div class="flex items-center mb-3 bg-white rounded ml-2">
       
     <input class="w-full  pl-4 pr-6 py-4 font-bold rounded focus:outline-none bg-white"  id="dept" type="text" placeholder="department"/>
   </div>
     </div>
  </div>
<p class="font-bold">Specifications</p>

  <div class="flex items-center mb-3 ">
      <div>
        <label for="roll">Roll no.</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="roll" type="text" placeholder="roll no" />
        </div>
      </div>
      <div>
          <label for="batch">Batch</label>
          <div class="flex items-center mb-3 bg-white rounded mr-2">
               
            <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="batch" type="text" placeholder="batch" />
          </div>
        </div>
      
  </div>
  <p class="font-bold">Credentials</p>
  <div class="flex items-center mb-3 ">
      <div>
        <label for="username">Username</label>
        <div class="flex items-center mb-3 bg-white rounded mr-2">
             
          <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="username" type="text" placeholder="username" />
        </div>
      </div>
      
      <div>
      <label for="pwd">Password</label>
  <div class="flex items-center mb-3 bg-white rounded mr-2">
       
    <input class="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="pwd" type="password" placeholder="password" />
  </div>
  </div>
  </div>
 
 
  
   
    <br></br>
    <button class="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Edit</button>
  </form>
    </div>
    </>
  )
}

export default Home