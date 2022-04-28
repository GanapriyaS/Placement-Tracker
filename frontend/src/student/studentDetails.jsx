import React from 'react'
import { Link } from 'react-router-dom'
const studentDetails = () => {
  return (
    <div className="w-full p-4 h-auto lg:h-screen pt-8 overflow-y-auto mt-6 px-10 ">
        <a href="/#" className="flex justify-center items-center text-3xl lg:text-4xl font-bold mb-6">
      <span className="text-black ">Our Students</span>
    </a>
    <div className="shadow rounded overflow-auto">
    
                    <table className="yellowleading-normal table-auto w-full ">
                        <thead >
                            <tr className="bg-gray-100">
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Name</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Domain</th>
                                

                                
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Dept</th>
                                
                                

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Details</th>

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Hire</th>
                                    
                            </tr>

                        </thead>
                        <tbody >
                           
                        <tr className="text-black">
    <td className="px-5 py-3 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-3 border-b border-gray-200 text-red-500 text-sm line-through">
    
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="name" type="search" placeholder="Search name" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="domain" type="search" placeholder="Search domain" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="dept" type="search" placeholder="Search department" />
    </td>
    
</tr>   

<tr className="bg-gray-600 text-gray-200">
    <td className="px-5 py-5 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap">1</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p className="whitespace-no-wrap"> task.title </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             tadsfasdklf 
        </p>
    </td>
    
   
    
    <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             tadsfasdklf 
        </p>
    </td>
    
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <Link to="/student/profile">
            <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-yellow-200  rounded-xl"></span>
                <span className="relative"><i className='bx bx-comment-detail bx-xs'></i></span>
            </span>
        </Link>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <a href="/detail-task/task.id">
            <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-blue-200  rounded-xl"></span>
                <span className="relative"><i class='bx bxs-conversation'></i></span>
            </span>
        </a>
    </td>
</tr>
                             
                            
                            <tr className="bg-gray-600 text-gray-200">
                                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p className="whitespace-no-wrap">2</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                    <p className="whitespace-no-wrap"> task.title </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                                    <p className="whitespace-no-wrap">
                                         task.created_date 
                                    </p>
                                </td>
                                
   
                                <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             tadsfasdklf 
        </p>
    </td>
                                
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <a href="/detail-task/task.id">
            <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-yellow-200  rounded-xl"></span>
                <span className="relative"><i className='bx bx-comment-detail bx-xs'></i></span>
            </span>
        </a>
    </td>
    <td className="px-5 py-5 border-b border-grey-200 text-sm">
        <a href="/detail-task/task.id">
            <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-blue-200  rounded-xl"></span>
                <span className="relative"><i class='bx bxs-conversation'></i></span>
            </span>
        </a>
    </td>
                                
                            </tr>
                            
                            <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                <td colSpan="9" className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            No students added yet
                                        </span>

                                    </div>
                                </td>
                            </tr>

                            <tr className=" border-b border-gray-200 bg-white text-sm ">
                                <td colSpan="9" >
                                   
                                <div
                        className="px-5 py-5 bg-gray-100 flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <div className="inline-flex xs:mt-0">

                              
                            <a className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                                href="?page=1">&laquo; 1</a>
                            <a className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                                href="?page= page_obj.previous_page_number ">prev</a>
                            &nbsp;
                              

                          

                            
                            <a className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                                href="?page= page_obj.next_page_number ">next</a>
                            <a className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                                href="?page= page_obj.paginator.num_pages ">last &raquo;</a>
                            
                        </div>

                    </div>

                                    
                                </td>
                            </tr>
                             
                        </tbody>
                      
                    </table>
                    
                </div>
</div>
  )
}

export default studentDetails