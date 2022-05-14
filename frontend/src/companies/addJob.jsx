import React ,{useContext, useState}from 'react'
import {LoginContext} from '../App.js';
import axios from 'axios'

const AddJobs = () => {
  const {auth,kind,msg} = useContext(LoginContext);
  console.log(auth,kind,msg)

  const [job, setJob] = useState({
    role: '',
    requ: '',
    domain: '',
    ldate: '',
    type:'',
    mode:''
});
const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [message, setMsg] = useState('');

const handleSubmit = (e) => {

  e.preventDefault(); 
  setLoading(true);
  setIsError(false);
  const { role,requ,domain,ldate,type,mode } = job;
 
  if (role && requ && domain && ldate && type && mode) {
    const data = {
      role: role,
    requ: requ,
    domain: domain,
    ldate: ldate,
    type:type,
    mode:mode
    }

   const env=process.env.NODE_ENV;
const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/company/"+msg+"/job": "http://localhost:5000/company/"+msg+"/job"
    axios.post(url, data).then(res => {
      setJob({  role: '',
      requ: '',
      domain: '',
      ldate: '',
      type:'',
      mode:'' });
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

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(name,value)
  setJob({ ...job, [name]: value });
};

  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Add jobs</p>

</div>
<br></br><br></br>
{isError && <div class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Holy smokes! </strong>
  <span class="block sm:inline">{message ? message : "Something went wrong"}</span>
</div>}
{isSuccess && <div class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Wow !! </strong>
  <span class="block sm:inline">Added job successfully</span>
</div>}      
<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="role">Role</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="roll" name="role" onChange={handleChange} required type="text" placeholder="job title" />
        </div>
      </div>
      <div>
          <label htmlFor="req">Requirement</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="req" name="requ" onChange={handleChange} required type="text" placeholder="requirement" />
          </div>
        </div>
      
  </div>

  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="domain">Domain</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="domain" name="domain" onChange={handleChange} required type="text" placeholder="domain" />
        </div>
      </div>

      <div>
          <label htmlFor="ldate">Last date to apply</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="ldate" type="date" placeholder="last date" name="ldate" onChange={handleChange} required />
          </div>
        </div>
      
  </div>
  <div className="flex items-center mb-3 ">
      <div  className='mr-2'>
        <label htmlFor="type">Type</label>
        <div className="dropdown  w-full mb-3 flex items-center  rounded mr-2">
            <select className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-100" required name="type" id="type" onChange={handleChange}>
          <option value="select" selected disabled hidden>Select type</option>
            <option value="intern">Intern</option>
            <option value="fulltime">FullTime</option>
          </select>
  </div>
       
      </div>
      
      <div>
      <label htmlFor="mode">Mode</label>
  
  <div className="dropdown  w-full mb-3 flex items-center  rounded mr-2">
            <select className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-100" required name="mode" id="mode" onChange={handleChange}>
          <option value="select" selected disabled hidden>Select mode</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
 
  </div>
  </div>
  </div>
 
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" disabled={loading} type="submit" onClick={handleSubmit}>{loading ? 'Loading...' : 'Add Company'}</button>
  </form>
    </div>
    </>
  )
}

export default AddJobs