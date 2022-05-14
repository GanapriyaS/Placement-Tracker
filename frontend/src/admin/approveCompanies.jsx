import React,{ useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ApproveCompanies = () => {

    const [companies, getCompanies] = useState([]);
    // const url = "https://placement-tracker-swart.vercel.app/admin/";
    const url = "http://localhost:5000/admin/";
    const getAllCompanies = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },params: {
            approval:false
          }})
        .then((response) => {
            const allCompanies = response.data
            getCompanies(allCompanies);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getAllCompanies();
    }, [])

  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
        <div className="lg:flex justify-around ">
  <div className="">
    <a href="/#" className="flex items-center text-4xl  font-bold">
      <span className="text-black ">Companies Requests</span>
    </a>
  </div>
  <div className="mt-4 md:mt-0 flex">
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/admin/companies/view">View Companies</Link>
    <Link className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/admin/staff/view">View Staff</Link>
    <Link className="py-2 px-3 text-sm bg-black mb-1 hover:bg-gray-400 text-white font-bold rounded transition duration-200" to="/admin/staff/add">Add Staff</Link>
    
  </div>
  
</div>
<br></br><br></br><br></br>
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
                                    Domain</th>
                                

                                
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Approve</th>
                                
                                

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
    <input className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white" id="domain" type="search" placeholder="Search domain" />
    </td>
    
</tr>  

 
{companies.map((company,index) => {
          const { id, name, department} = company;
          return (
            <tr className="bg-gray-600 text-gray-200" key={id}>
            <td className="px-5 py-5 border-b  border-gray-200 text-sm">
                <p className="whitespace-no-wrap">{index +1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm ">
                <p className="whitespace-no-wrap">{name} </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="whitespace-no-wrap">
                    {department}
                </p>
            </td>
            
           
            
            <td className="px-5 py-5 border-b border-gray-200 text-sm ">
        <p className="cursor-default">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-green-200  rounded-xl"></span>
                <span className="relative"><i className='bx bx-award bx-xs'></i></span>
            </span>
        </p>
    </td>
    
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
        <Link to="/companies/profile">
            <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                <span aria-hidden className="absolute inset-0 bg-yellow-200  rounded-xl"></span>
                <span className="relative"><i className='bx bx-comment-detail bx-xs'></i></span>
            </span>
        </Link>
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

export default ApproveCompanies