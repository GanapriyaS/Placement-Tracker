import React,{useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {LoginContext} from '../App.js';
import axios from 'axios'

const Recruiters = () => {
    const {auth,kind,msg} = useContext(LoginContext);
    console.log(auth,kind,msg)

    
const [jobs, getJobs] = useState([]);
const env=process.env.NODE_ENV;
const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/alljobs": "http://localhost:5000/alljobs"

    console.log(url)
    const getAllJobs = () =>{
        axios.get(url, { headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }})
        .then((response) => {
            const allJobs = response.data
            console.log(allJobs)
            getJobs(allJobs);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getAllJobs();
    }, [])


  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
        <div className="flex justify-center pb-5">
  <div className="">
    <a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
      <span className="text-black ">Recruiters</span>
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
                                    Company Name</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Role</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Domain</th>

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Online/Offline</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Last date to apply</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Type</th>
                                

                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Details</th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Apply</th>  
                                  
                            </tr>

                        </thead>
                        <tbody >
                        <tr className="text-black">
    <td className="px-5 py-3 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-3 border-b border-gray-200 text-red-500 text-sm line-through">
    
    <input className=" px-1 py-2 font-bold rounded  focus:outline-none bg-white" id="name" type="search" placeholder="Search name" />
    </td>
    <td className="px-5 py-3 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" px-1 py-2 font-bold rounded  focus:outline-none bg-white" id="domain" type="search" placeholder="Search domain" />
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" px-1 py-2 font-bold rounded  focus:outline-none bg-white" id="mode" type="search" placeholder="Search mode" />
    </td>
    <td className="px-5 py-3 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap"></p>
    </td>
    <td className="px-5 py-3 border-b border-gray-200  text-sm">
    <input className=" px-1  py-2 font-bold rounded  focus:outline-none bg-white" id="type" type="search" placeholder="Search type" />
    </td>
    
    
    
</tr>   

{jobs.map((job,index) => {
    
          const {id,companyname,dept,intern,lastdate,name,online} =job;
          
          return (      

                                        
<tr className="bg-gray-600 text-gray-200" key={id}>
    <td className="px-5 py-5 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap">{index +1}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p className="whitespace-no-wrap">{companyname} </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p className="whitespace-no-wrap">{name} </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             {dept}
        </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p className="whitespace-no-wrap"> {online} </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             {lastdate}
        </p>
    </td>
    
    <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="whitespace-no-wrap">
             {intern} 
        </p>
    </td>
   
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                    <Link to="/companies/jobs/details">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-yellow-200  rounded-xl"></span>
                                            <span className="relative"><i className='bx bx-comment-detail bx-xs'></i></span>
                                        </span>
                                    </Link>
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



            
          );
        })}       
                            

                             
                            
                            
                            
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

export default Recruiters