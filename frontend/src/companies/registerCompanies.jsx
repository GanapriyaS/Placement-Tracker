import React, { useState } from 'react'
import axios from 'axios'

const RegisterCompanies = () => {
  const [company, setCompany] = useState({
    name: '',
    description: '',
    department: '',
    pack: '',
    website:'',
    email:'',
    phoneno:''
});
const [loading, setLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [msg, setMsg] = useState('');

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
    const url = env === 'production'?  "https://placement-tracker-swart.vercel.app/register/": "http://localhost:5000/register/"
        
    axios.post(url, data).then(res => {
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
  console.log(name,value)
  setCompany({ ...company, [name]: value });
};


  return (
    <>
  
    <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
    <div className="grid justify-items-center ">
    
    <p className="bg-black rounded-full text-white py-3 px-4">Registration</p>

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
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="name" name="name" onChange={handleChange} required type="text" placeholder="Name" />
        </div>
      </div>
      <div>
      <label htmlFor="description">Description</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
          <textarea className="w-full  pl-4 pr-6 py-1 font-bold rounded resize-y rounded-md focus:outline-none bg-white" row="1" id="description" name="description" onChange={handleChange} required />
          </div>
        </div>
      
  </div>
     
  </div>
  <p className="font-bold">Contact details</p>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="email">Email</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="email" name="email" onChange={handleChange} required type="email" placeholder="Email" />
        </div>
      </div>
      
      <div>
      <label htmlFor="number">Phone number</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="phoneno" name="phoneno" onChange={handleChange} required type="text" placeholder="PhoneNumber" />
  </div>
  </div>
  </div>
<br></br>
<br></br>
<p className="font-bold">Specifications</p>
<div>
  <label htmlFor="department">Domain</label>
  <div className="flex items-center mb-3 bg-white rounded mr-2">
       
    <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="department" name="department" onChange={handleChange} required type="text" placeholder="domain" />
  </div>
</div>
  <div className="flex items-center mb-3 ">
      <div>
        <label htmlFor="pack">Package</label>
        <div className="flex items-center mb-3 bg-white rounded mr-2">
             
          <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="pack" name="pack" onChange={handleChange} required type="text" placeholder="package" />
        </div>
      </div>

      <div>
          <label htmlFor="website">Website</label>
          <div className="flex items-center mb-3 bg-white rounded mr-2">
               
            <input className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white" id="website" name="website" onChange={handleChange} required type="url" placeholder="website" />
          </div>
        </div>
      
  </div>
 
 
  
   
    <br></br>
    <button className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200" disabled={loading} type="submit" onClick={handleSubmit}>{loading ? 'Loading...' : 'Register'}</button>
  </form>
    </div>
    </>
  )
}

export default RegisterCompanies
