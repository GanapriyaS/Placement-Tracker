import React from 'react'

const viewStudents = () => {
  return (
    <div class=" flex justify-evenly mt-20 w-full h-screen">
       
    <div class="lg:mx-0 lmx-8  px-8 lg:px-0 py-4 overflow-x-auto transition ease-in-out" >
                <div class="inline-block  shadow rounded overflow-hidden">
                    <table class="leading-normal table-auto">
                        <thead>
                            <tr class="bg-gray-100">
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Tasks</th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Created at</th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Delete</th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Edit</th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Done</th>

                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Details</th>
                            </tr>

                        </thead>
                        <tbody>
                           
                            
<tr class="bg-gray-500 text-gray-200">
    <td class="px-5 py-5 border-b  border-gray-200 text-sm">
        <p class="whitespace-no-wrap">forloop.counter</p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p class="whitespace-no-wrap"> task.title </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200  text-sm">
        <p class="whitespace-no-wrap">
             task.created_date 
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-sm">
        <a href="/delete-task/task.id">
            <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                <span aria-hidden class="absolute inset-0 bg-red-200 rounded-full"></span>
                <span class="relative"><i class='bx bx-trash-alt bx-sm'></i></span>
            </span>
        </a>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-sm">
        <a href="/update-task/task.id">
            <span class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                <span aria-hidden class="absolute inset-0 bg-blue-200 rounded-full"></span>
                <span class="relative"><i class='bx bx-edit-alt bx-sm'></i></span>
            </span>
        </a>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-sm ">
        <p class="cursor-default">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden class="absolute inset-0 bg-gray-500  rounded-full"></span>
                <span class="relative"><i class='bx bx-award bx-sm'></i></span>
            </span>
        </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 text-sm">
        <a href="/detail-task/task.id">
            <span class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                <span aria-hidden class="absolute inset-0 bg-yellow-200  rounded-full"></span>
                <span class="relative"><i class='bx bx-comment-detail bx-sm'></i></span>
            </span>
        </a>
    </td>
</tr>
                             
                            
                            <tr class="bg-gray-500 text-gray-200">
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <p class="whitespace-no-wrap">forloop.counter</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200  text-sm">
                                    <p class="whitespace-no-wrap"> task.title </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200  text-sm">
                                    <p class="whitespace-no-wrap">
                                         task.created_date 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <a href="/delete-task/task.id"  >
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden class="absolute inset-0 bg-red-200 rounded-full"></span>
                                            <span class="relative"><i class='bx bx-trash-alt bx-sm'></i></span>
                                        </span>
                                    </a>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <a href="/update-task/task.id">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                            <span aria-hidden class="absolute inset-0 bg-blue-200 rounded-full"></span>
                                            <span class="relative"><i class='bx bx-edit-alt bx-sm'></i></span>
                                        </span>
                                    </a>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <a href="/complete_task/task.id">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200  rounded-full"></span>
                                            <span class="relative"><i class='bx bx-award bx-sm'></i></span>
                                        </span>
                                    </a>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                                    <a href="/detail-task/task.id">
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-yellow-200  rounded-full"></span>
                                            <span class="relative"><i class='bx bx-comment-detail bx-sm'></i></span>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                            
                            <tr class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                <td colspan="7" class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span class="text-xs xs:text-sm text-gray-900">
                                            No tasks yet
                                        </span>

                                    </div>
                                </td>
                            </tr>
                             
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-gray-100 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <div class="inline-flex xs:mt-0">

                              
                            <a class=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                                href="?page=1">&laquo; 1</a>
                            <a class=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                                href="?page= page_obj.previous_page_number ">prev</a>
                            &nbsp;
                              

                          

                            
                            <a class=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                                href="?page= page_obj.next_page_number ">next</a>
                            <a class=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                                href="?page= page_obj.paginator.num_pages ">last &raquo;</a>
                            
                        </div>

                    </div>
                </div>
            </div>
            </div>
        
  )
}

export default viewStudents