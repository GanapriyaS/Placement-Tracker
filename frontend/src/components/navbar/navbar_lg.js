import React from 'react'
import {Link} from 'react-router-dom';
const navbar_lg = () => {
  return (
    <div className="flex flex-col w-full px-2 py-8 overflow-auto border-b lg:border-r bg-white lg:h-screen lg:w-64 lg:block hidden fixed" id="menu">
  
  
          <div className="flex flex-col justify-between mt-4">
            <aside>
              <ul>
                
                <li>
                  <Link className="flex items-center px-4 py-2 text-black rounded-md hover:bg-gray-200 " to="/login">
                  <i className='bx bxs-user-x bx-sm bx-fade-right-hover' ></i>
  
                    <span className="mx-4 font-medium">Login</span>
                  </Link>
                </li>

                <li>
                  <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/">
                  <i className='bx bx-home bx-sm bx-fade-right-hover'></i>
  
                    <span className="mx-4 font-medium">Home</span>
                  </Link>
                </li>
                
                <li>
                  <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/companies/view">
                  <i className='bx bx-award bx-sm bx-fade-right-hover' ></i>
  
                    <span className="mx-4 font-medium">View Jobs</span>
                  </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/companies/register">
                    <i className='bx bx-user-plus bx-sm bx-fade-right-hover' ></i>
    
                      <span className="mx-4 font-medium">Register Companies</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/student/view">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
    
                      <span className="mx-4 font-medium">Hire Students</span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/staff/profile">
                    <i className='bx bx-user bx-sm bx-fade-right-hover'></i>
    
                      <span className="mx-4 font-medium">Staff Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/student/profile">
                    <i className='bx bx-user bx-sm bx-fade-right-hover'></i>
    
                      <span className="mx-4 font-medium">Student Profile</span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/companies/profile">
                    <i className='bx bx-user bx-sm bx-fade-right-hover'></i>
    
                      <span className="mx-4 font-medium">Companies Profile</span>
                    </Link>
                  </li>

                  <li>
                    <Link className="flex items-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200 " to="/admin/companies/approve">
                    <i className='bx bx-user bx-sm bx-fade-right-hover'></i>
    
                      <span className="mx-4 font-medium">Admin Page</span>
                    </Link>
                  </li>
                  
                 
                  <li className="mt-4">
                    <hr></hr>
                    <div className="items-center text-center px-4 py-2 mt-5 text-black rounded-md hover:bg-gray-200" >
                      
    
                      <span className="text-center font-medium ">Pentagon</span><br></br>
                      <span className="text-center text-blue-500">Log out</span>
                    </div>
                  </li>
              </ul>
  
            </aside>
  
          </div>
        </div>
  )
}

export default navbar_lg