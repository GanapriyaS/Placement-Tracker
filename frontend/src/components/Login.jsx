import React from 'react'

const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-0  lg:min-h-screen  "> 
        <div className="bg-black w-26 lg:min-h-screen py-10 lg:py-0 flex items-center justify-center px-3 lg:px=0">
          <div>
          <h2 className=" mb-12 text-5xl font-bold font-heading text-white">Placement System</h2>
            
            <p className="text-lg text-gray-200">

              <span>Students • Staffs • Companies</span>
             
            </p></div> 
        </div>
        <div className="bg-white   lg:min-h-screen flex items-center justify-center"> 
        <form className="lg:px-10 lg:py-0 py-5 px-5" action="#">
            <h3 className="mb-10 text-2xl text-black font-bold font-heading text-center">Authorized Login</h3>
            <div className="flex items-center mb-3 bg-white rounded">
           
              <input className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200" type="email" placeholder="Email"/>
            </div>
            <div className="flex items-center  mb-3 bg-white rounded">
             
              <input className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200" type="password" placeholder="Password"/>
            </div>
            
            <button className="py-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Login</button>
          </form>
        </div> 
        
    </div>
  )
}

export default Login