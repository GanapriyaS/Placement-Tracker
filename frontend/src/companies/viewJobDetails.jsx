import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../App.js";
import axios from "axios";

const ViewJobDetails = (props) => {
  const params = useParams();
  console.log(params.job);

  const { auth, kind, msg } = useContext(LoginContext);
  console.log(auth, kind, msg);

  const [jobs, getJobs] = useState([]);
  const env = process.env.NODE_ENV;
  const url =
    env === "production"
      ? "https://placement-tracker-swart.vercel.app/company/" +
        msg +
        "/job/" +
        params.job
      : "http://localhost:5000/company/" + msg + "/job/" + params.job;

  console.log(url);
  const getAllJobs = () => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const allJobs = response.data;
        console.log(allJobs);
        getJobs(allJobs);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="w-full h-full p-5 lg:px-20 pt-8 lg:pt-10   overflow-y-auto ">
      <div className="flex justify-between ">
        <div className="">
          <a
            href="/#"
            className="flex items-center text-4xl text-5xl font-bold"
          >
            <span className="text-black ">{jobs.companyname}</span>
          </a>
        </div>
        {/* <div className="">
    <button className="py-3 px-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Apply</button>
  </div> */}
      </div>
      <br></br>

      <p className="font-bold text-2xl px-2 pb-2">Description</p>
      <p className="px-2">{jobs.description}</p>

      <br></br>
      <br></br>

      <p className="text-2xl font-bold pb-3">Job Requirements</p>

      <div className="p-5 lg:p-10 bg-white text-black  rounded">
        <p className="px-2">{jobs.req}</p>
        {/* <p className="font-bold text-xl lg:text-2xl px-2">Sam Dow</p>
<p className="px-2">South Apt, East block, west city North 18090</p>
<br></br>
<ul className='list-disc px-3'>
    <li className='pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium dicta provident saepe veniam aspernatur fuga itaque aliquam vitae nostrum numquam iste fugiat esse quidem, impedit quia laborum maxime ratione.</li>
    <li className='pb-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod inventore distinctio! Expedita necessitatibus facilis illo saepe asperiores magni cum, laudantium quod consectetur iusto sapiente quis voluptatem maiores laborum fuga.</li>
    <li className='pb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim maxime, officia harum porro repellendus reiciendis incidunt perferendis recusandae deleniti temporibus expedita quam optio quasi sapiente illum, iusto, laborum necessitatibus sint!</li>
</ul> */}
      </div>
      <br></br>
      <br></br>

      <p className="text-2xl font-bold pb-2 text-center">Notes</p>
      <div className="grid justify-center ">
        <table className="overflow-auto  flex divide-x divide-gray-300 rounded-lg">
          <tbody className="bg-white divide-y divide-gray-300 font-bold">
            <tr className="whitespace-nowrap">
              <td className="px-6 lg:px-10 py-4  text-gray-500 border-x">
                Domain
              </td>
              <td className="px-6 lg:px-10 py-4 border-x">
                <div className=" text-gray-900">{jobs.dept}</div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 lg:px-10 py-4 text-gray-500 ">Last Date</td>
              <td className="px-6 lg:px-10 py-4 border-x">
                <div className="text-gray-900">{jobs.lastdate}</div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 lg:px-10 py-4  text-gray-500">Type</td>
              <td className="px-6  lg:px-10 py-4 border-x">
                <div className="text-gray-900">{jobs.intern}</div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 lg:px-10 py-4  text-gray-500">Mode</td>
              <td className="px-6 lg:px-10 py-4 border-x">
                <div className="text-gray-900">{jobs.online}</div>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 lg:px-10 py-4  text-gray-500">Website</td>
              <td className="px-6 lg:px-10 py-4 border-x">
                <div className="text-gray-900">{jobs.website}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      {/* <p className="font-bold text-2xl px-2">Other Details</p>
    <p className="px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi quam itaque recusandae animi, provident vero ducimus non unde rerum reiciendis quia quos autem iste dicta, laudantium tempora culpa voluptates.</p>
    <p className="px-2">South Apt, East block, west city North 18090</p> */}
    </div>
  );
};

export default ViewJobDetails;
