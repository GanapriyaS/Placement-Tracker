import React from 'react'

const header = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b-2 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button className="p-1 pr-4 text-gray-600 rounded cursor-pointer lg:hidden " onClick={()=>document.getElementById("menu").classList.toggle("hidden")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <a href="/#" className="flex items-center text:xl sm:text-2xl font-bold">
                <span className="text-black ">Placement - GCT</span>
              </a>
  
            </div>
           
          </div>
        </div>
      </nav>
  )
}

export default header