import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios'

const EditCompaniesProfile = () => {
  const [company, setCompany] = useState({
    name: '',
    description: '',
    department: '',
    pack: '',
    website:'',
    email:'',
    phoneno:'',
    id:''


});
const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [msg, setMsg] = useState('');

const location = useLocation();
  useEffect(() => {
    const {data } = location.state;
    setCompany( {
      id:data.id,
      name: data.name,
      description: data.description,
      department: data.department,
      pack: data.package,
      website:data.website,
      email:data.email,
      phoneno:data.phoneno})
    console.log(data)
  }, [])

const handleSubmit = (e) => {

  e.preventDefault(); 
  setLoading(true);
  setIsError(false);
  console.log(company)

  const { name, description,department, pack,website,email,phoneno } = company;
 
  if (name && description && department && pack && website && email && phoneno) {
    const data = {
      name: name,
    description: description,
    department: department,
    package: pack,
    website:website,
    email:email,
    phoneno:phoneno
    }
    const env=process.env.NODE_ENV;
    const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/company/"+company.id: "http://localhost:5000/company/"+company.id
        
    axios.put(url, data).then(res => {
      setCompany({ name: '',
      description: '',
      department: '',
      pack: '',
      website:'',
      email:'',
      phoneno:''});
      setLoading(false);
      console.log(3)

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

  setCompany({ ...company, [name]: value });
};



  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Edit profile</p>

</div>
<br></br><br></br>
{isError && <div class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Holy smokes! </strong>
  <span class="block sm:inline">{msg ? msg : "Something went wrong"}</span>
</div>}
{isSuccess && <div class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
  <strong class="font-bold">Wow !! </strong>
  <span class="block sm:inline">Registered successfully</span>
</div>} 
<form className=" lg:py-0 py-5  grid justify-center" action="#">
  <p className="font-bold">Profile</p>
  <div className="flex items-center mb-3 ">
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="roll">Name</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" name="name" onChange={handleChange} value={company.name} required type="text" placeholder="Name" />
        </div>
      </div>
      <div>
      <label for="desc">Description</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
          <textarea className="w-full  pl-4 pr-6 py-1 font-bold rounded resize-y rounded-md focus:outline-none bg-white" row="1" id="description" value={company.description} name="description" onChange={handleChange} required />
          </div>
        </div>
      
  </div>
     
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label for="email">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="email" name="email" value={company.email} onChange={handleChange} required type="email" placeholder="Email" />
        </div>
      </div>
      
      <div>
      <label for="number">Phone number</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="phoneno" name="phoneno" value={company.phoneno} onChange={handleChange} required type="text" placeholder="PhoneNumber" />
  </div>
  </div>
  </div>
<br></br>
<br></br>
<p className="font-bold">Specifications</p>
<div>
  <label for="domain">Domain</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="domain" name="department" onChange={handleChange} value={company.department} required type="text" placeholder="domain" />
  </div>
</div>
  <div className="flex items-center mb-3 ">
      <div>
        <label for="package">Package</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="package" name="package" onChange={handleChange} value={company.pack} required type="text" placeholder="package" />
        </div>
      </div>

      <div>
          <label for="site">Website</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="website" name="website" onChange={handleChange} value={company.website} required type="url" placeholder="website" />
          </div>
        </div>
      
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" disabled={loading} type="submit" onClick={handleSubmit}>{loading ? 'Loading...' : 'Edit profile'}</button>
  </form>
    </div>
    </>
  )
}

export default EditCompaniesProfile