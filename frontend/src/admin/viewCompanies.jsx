import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ViewCompanies = () => {
    const [companies, getCompanies] = useState([]);
    // const url = "https://placement-tracker-swart.vercel.app/admin/";
    const url = "http://localhost:5000/admin/";
    const getAllCompanies = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },params: {
            approval:true
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
        <div className="flex justify-center pb-5">
  <div className="">
    <a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
      <span className="text-black ">Companies Data</span>
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
                                    Domain</th>
                                

                                
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Disapprove</th>
                                
                                

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
                <p className="whitespace-no-wrap">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm ">
                <p className="whitespace-no-wrap">{name} </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200  text-sm">
                <p className="whitespace-no-wrap">
                    {department}
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
            
            <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                <Link to="/companies/profile">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200  rounded-xl"></span>
                        <span className="relative"><i className='bx bx-award bx-xs'></i></span>
                    </span>
                </Link>
            </td>
            
        </tr>
            
          );
        })}     
                        </tbody>
                      
                    </table>
                    
                </div>
  
            </div>
  )
}

export default ViewCompanies