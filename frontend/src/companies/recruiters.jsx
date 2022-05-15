import React,{useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {LoginContext} from '../App.js';
import axios from 'axios'

const Recruiters = () => {
    const {auth,kind,msg} = useContext(LoginContext);
    console.log(auth,kind,msg)
    const [open, setOpen] = useState(false);
  
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [message, setMsg] = useState('');
const [jobid, setJobid] = useState('');
const [companyid, setCompanyid] = useState('');
    
const applyJob=()=>{
    setIsError(false);
    if(kind==="student"){
      const data = {
        studentid:msg
      }
  
     const env=process.env.NODE_ENV;
  const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/company/"+companyid+"/job/"+jobid+"/applicants": "http://localhost:5000/company/"+companyid+"/job/"+jobid+"/applicants"
      axios.post(url, data).then(res => {
        setJobid('')
        setCompanyid('')
      
        console.log(res.status)
  
        const success = res.data
        if(success===1){
          setIsSuccess(true)
        }
      }).catch(err => {
        console.log(err.response.data.msg)
      
        setIsError(true);
        setMsg(err.response.data.msg)
      });
    }
    else{
        setIsError(true);
        setMsg("You are not a student")
    }
    setOpen(false)
}
  

const openConfirmationModal=(companyid,jobid)=>{
    setJobid(jobid)
    setCompanyid(companyid)
setOpen(true)
}

const closeConfirmationModal=()=>{
setOpen(false)
}
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
     <>
    {open && <main class="antialiased bg-opacity-50 fixed bg-gray-200 text-gray-900 font-sans w-full  overflow-x-hidden">
  <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
    <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
    <div class="bg-white  rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
      <div class="md:flex items-center">
        <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
          <i class="bx bx-error text-3xl"></i>
        </div>
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p class="font-bold">Are you wish to apply?</p>
          <p class="text-sm text-gray-700 mt-1">Your data will be recorded and sent to the company for futhur rounds
          </p>
        </div>
      </div>
      <div class="text-center md:text-right mt-4 md:flex md:justify-end">
        <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"  onClick={applyJob}>Apply</button>
        <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1" onClick={()=>closeConfirmationModal()}>Cancel</button>
      </div>
    </div>
  </div>
</main>}
      
    <div className=" p-4 pt-10 w-full h-screen  ">
        <div className="flex justify-center pb-5">
  <div className="">
    <a href="/#" className="flex items-center text-3xl lg:text-4xl font-bold">
      <span className="text-black ">Recruiters</span>
    </a>
  </div>
</div>
{isError && <div class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Holy smokes! </strong>
  <span class="block sm:inline">{message ? message : "Something went wrong"}</span>
</div>}
{isSuccess && <div class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Wow !! </strong>
  <span class="block sm:inline">Added job successfully</span>
</div>}   
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
    
          const {id,companyname,compname,dept,intern,lastdate,name,online} =job;
          
          return (      

                                        
<tr className="bg-gray-600 text-gray-200" key={id}>
    <td className="px-5 py-5 border-b  border-gray-200 text-sm">
        <p className="whitespace-no-wrap">{index +1}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
        <p className="whitespace-no-wrap">{compname} </p>
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
        <p className="cursor-pointer"   onClick={()=>openConfirmationModal(companyname,id)}>
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
            </>
  )
}

export default Recruiters