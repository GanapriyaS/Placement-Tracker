import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewStaffs = () => {
    const [staffs, getStaffs] = useState([]);
    const env=process.env.NODE_ENV;
    const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/admin/staff/": "http://localhost:5000/admin/staff/"

    const getAllStaffs = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }})
        .then((response) => {
            const allStaffs = response.data
            getStaffs(allStaffs);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getAllStaffs();
    }, [])

  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
        <div className="flex justify-center pb-5">
  <div className="">
    <a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
      <span className="text-black ">Staff Data</span>
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
                                    Name</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Dept</th>
                               
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Role</th>
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
                        <tr className="text-black">
    <td className="px-5 py-3 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-3 border-b border-gray-200 text-red-500 text-sm line-through">
    
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="name" type="search" placeholder="Search name" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="dept" type="search" placeholder="Search department" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="role" type="search" placeholder="Search role" />
    </td>
    
</tr>        

{staffs.map((staff,index) => {
          const { id, name, dept, job} =staff;
          return (
            <tr className="bg-gray-600 text-gray-200"  key={id}>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <p className="whitespace-no-wrap">{index +1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="whitespace-no-wrap"> {name}</p>
            </td>
           
            
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
<p className="whitespace-no-wrap">{dept}</p>
</td>
<td className="px-5 py-5 border-b border-gray-200  text-sm">
<p className="whitespace-no-wrap">
{job}
</p>
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
            <Link className="py-2 px-3 text-sm  mb-1 hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/staff/editprofile" state={{data:staff}}>
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-blue-200 rounded-xl"></span>
                        <span className="relative"><i className='bx bx-edit-alt bx-xs'></i></span>
                    </span>
                    </Link>
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
       
            
          );
        })}        

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

export default ViewStaffs