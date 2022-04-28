import React from 'react'

const viewJobs = () => {
  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
    <div className="flex justify-center pb-5">
<div className="">
<a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
  <span className="text-black ">Existing jobs</span>
</a>
</div>
</div>
   <div className="shadow rounded overflow-auto">
                <table className="leading-normal table-auto w-full ">
                    <thead >
                        <tr className="bg-gray-100">
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Role</th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Requirements</th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Domain</th>

                            
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Delete</th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Edit</th>
                            

                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Details</th>
                                
                        </tr>

                    </thead>
                    <tbody >
                       
                        
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
<td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
    <p className="whitespace-no-wrap"> task.title </p>
</td>


<td className="px-5 py-5 border-b border-gray-200 text-sm">
    <a href="/delete-task/task.id">
        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-red-200 rounded-xl"></span>
            <span className="relative"><i className='bx bx-trash-alt bx-xs'></i></span>
        </span>
    </a>
</td>
<td className="px-5 py-5 border-b border-gray-200 text-sm">
    <a href="/update-task/task.id">
        <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-blue-200 rounded-xl"></span>
            <span className="relative"><i className='bx bx-edit-alt bx-xs'></i></span>
        </span>
    </a>
</td>
<td className="px-5 py-5 border-b border-gray-200 text-sm ">
    <p className="cursor-default">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-green-200  rounded-xl"></span>
            <span className="relative"><i className='bx bx-award bx-xs'></i></span>
        </span>
    </p>
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
                            <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
    <p className="whitespace-no-wrap"> task.title </p>
</td>

                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                <a href="/delete-task/task.id"  >
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-red-200 rounded-xl"></span>
                                        <span className="relative"><i className='bx bx-trash-alt bx-xs'></i></span>
                                    </span>
                                </a>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                <a href="/update-task/task.id">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-blue-200 rounded-xl"></span>
                                        <span className="relative"><i className='bx bx-edit-alt bx-xs'></i></span>
                                    </span>
                                </a>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                <a href="/complete_task/task.id">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200  rounded-xl"></span>
                                        <span className="relative"><i className='bx bx-award bx-xs'></i></span>
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

export default viewJobs