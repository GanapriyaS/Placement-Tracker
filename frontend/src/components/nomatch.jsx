import React from 'react'
import img from '../static/nomatch.svg';

const nomatch = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-0  lg:min-h-screen  "> 
        <div className="bg-black w-26 lg:min-h-screen py-10 lg:py-0 flex items-center justify-center px-3 lg:px=0">
          <div className='text-center'>
          <h2 className=" mb-12 text-7xl lg:text-9xl font-bold font-heading text-white">404</h2>
            
            <p className="text-2xl lg:text-3xl text-gray-200 ">

              <span className='text-red-600 '>Oops !</span> Page not found
             
            </p></div> 
        </div>
        <div className="bg-white   lg:min-h-screen flex items-center justify-center p-7"> 
        <img class="h-auto w-auto object-cover" src={img} alt="404 Page not Found" />
        </div> 
        
    </div>
  )
}

export default nomatch