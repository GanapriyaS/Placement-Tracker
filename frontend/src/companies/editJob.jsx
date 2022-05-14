import React,{useState, useEffect,useContext} from 'react'
import { useLocation } from "react-router-dom";
import {LoginContext} from '../App.js';
import axios from 'axios'

const EditJob = () => {
  const {auth,kind,msg} = useContext(LoginContext);
  console.log(auth,kind,msg)
  const [job, setJob] = useState({
    name: '',
    req: '',
    dept: '',
    lastdate: '',
    intern:'',
    online:'',
    
});

const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [message, setMsg] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
  const value = e.target.value;
  console.log(name,value)
  setJob({ ...job, [name]: value });
  };
  const location = useLocation();

useEffect(() => {
  const {data } = location.state;
  console.log(data)
  setJob(data)
  console.log(data)
}, [])
  



const handleSubmit = (e) => {

e.preventDefault(); 
setLoading(true);
setIsError(false);
const {  name,req,dept,lastdate,intern,online,id } = job;

if (name && req && dept && lastdate && intern && online && id) {
  const data = {
    role: name,
  requ: req,
  domain: dept,
  ldate: lastdate,
  type:intern,
  mode:online
  }
  const env=process.env.NODE_ENV;
const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/company/"+msg+"/job/"+job.id: "http://localhost:5000/company/"+msg+"/job/"+job.id

  axios.put(url, data).then(res => {
    setJob({  name: '',
    req: '',
    dept: '',
    lastdate: '',
    intern:'',
    online:'' });
    setLoading(false);
    console.log(res.status)

    const success = res.data
    if(success===1){
      setIsSuccess(true)
    }
  }).catch(err => {
    console.log(err.response.data.msg)
    setLoading(false);
    setIsError(true);
    setMsg(err.response.data.msg)
  });
}
};

  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Edit jobs</p>

</div>
<br></br><br></br>
{isError && <div class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Holy smokes! </strong>
  <span class="block sm:inline">{message ? message : "Something went wrong"}</span>
</div>}
{isSuccess && <div class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Wow !! </strong>
  <span class="block sm:inline">Edited Job successfully</span>
</div>} 
<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="name">Role</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" name="name" onChange={handleChange} required value={job.name} type="text" placeholder="job title" />
        </div>
      </div>
      <div>
          <label htmlFor="req">Requirement</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="req" name="req" onChange={handleChange} required type="text" value={job.req} placeholder="requirement" />
          </div>
        </div>
      
  </div>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="dept">Domain</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="dept" name="dept" onChange={handleChange} required type="text" value={job.dept} placeholder="domain" />
        </div>
      </div>

      <div>
          <label htmlFor="lastdate">Last date to apply</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="lastdate" name="lastdate" onChange={handleChange} required type="date" value={job.lastdate} placeholder="last date" />
          </div>
        </div>
      
  </div>
  <div className="flex items-center mb-3 ">
      <div  className='mr-2'>
        <label htmlFor="type">Type</label>
        <div className="dropdown  w-full mb-3 flex items-center  rounded mr-2">
            <select className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-100" required name="type" id="type" onChange={handleChange} value={job.intern}>
          <option value="select" selected disabled hidden>Select type</option>
            <option value="intern">Intern</option>
            <option value="fulltime">FullTime</option>
          </select>
  </div>
       
      </div>
      
      <div>
      <label htmlFor="online">Mode</label>
  
  <div className="dropdown  w-full mb-3 flex items-center  rounded mr-2">
            <select className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-100" required name="online" id="online" onChange={handleChange} value={job.online}>
          <option value="select" selected disabled hidden>Select mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
 
  </div>
  </div>
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" disabled={loading} type="submit" onClick={handleSubmit}>{loading ? 'Loading...' : 'Edit Job'}</button>
  </form>
    </div>
    </>
  )
}

export default EditJob