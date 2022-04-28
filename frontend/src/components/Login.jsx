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
            <div className="dropdown inline-block relative w-full mb-3">
    <button className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200 rounded inline-flex items-center pr-5">
      <span className="mr-1 pr-5">User</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li className=""><p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Students</p></li>
      <li className=""><p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Staffs</p></li>
      <li className=""><p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Companies</p></li>
      <li className=""><p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-8 block whitespace-no-wrap">Admin</p></li>
    </ul>
  </div>
            
            <button className="py-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Login</button>
          </form>
        </div> 
        
    </div>
  )
}

export default Login