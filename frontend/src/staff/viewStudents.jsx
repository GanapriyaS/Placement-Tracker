import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ViewStudents = () => {

    const [students, getStudents] = useState([]);
    // const url = "https://placement-tracker-swart.vercel.app/admin/";
    const url = "http://localhost:5000/staff/student";
    const getAllStudents = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }})
        .then((response) => {
            const allStudents = response.data
            console.log(allStudents)
            getStudents(allStudents);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getAllStudents();
    }, [])

  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
        <div className="flex justify-center pb-5">
  <div className="">
    <a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
      <span className="text-black ">Student Data</span>
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
                                    Roll Number</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Batch</th>

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Dept</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Delete</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Edit</th>
                                

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Details</th>
                                    <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Comments</th>
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
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="role" type="search" placeholder="Search role number" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="batch" type="search" placeholder="Search batch" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="dept" type="search" placeholder="Search department" />
    </td>
    
</tr>              


{students.map((student,index) => {
          const { id, name, dept,rollno,batch} =student;
          return (
            <tr className="bg-gray-600 text-gray-200" key={id}>
            <td className="px-5 py-5 border-b  border-gray-200 text-sm">
                <p className="whitespace-no-wrap">{index+1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
                <p className="whitespace-no-wrap">{name}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="whitespace-no-wrap">
                     {rollno}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
                <p className="whitespace-no-wrap">{batch} </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="whitespace-no-wrap">
                   {dept}
                </p>
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
            
                <Link to="/staff/student/edit" state={{data:student}}>
                    <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-blue-200 rounded-xl"></span>
                        <span className="relative"><i className='bx bx-edit-alt bx-xs'></i></span>
                    </span>
                </Link>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-sm ">
            <Link to="/student/profile">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200  rounded-xl"></span>
                        <span className="relative"><i className='bx bx-award bx-xs'></i></span>
                    </span>
                </Link>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                <a href="/detail-task/task.id">
                    <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-yellow-200  rounded-xl"></span>
                        <span className="relative"><i className='bx bx-comment-detail bx-xs'></i></span>
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

export default ViewStudents