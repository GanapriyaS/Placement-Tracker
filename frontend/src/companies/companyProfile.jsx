import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { LoginContext } from "../App.js";
import axios from "axios";

const CompanyProfile = (props) => {
  const params = useParams();
  console.log(params.company);

  const { auth, kind, msg } = useContext(LoginContext);
  console.log(auth, kind, msg);

  const [profile, getProfile] = useState([]);
  const env = process.env.NODE_ENV;
  const url =
    env === "production"
      ? "https://placement-tracker-swart.vercel.app/company/" + params.company
      : "http://localhost:5000/company/" + params.company;
  console.log(url);
  const getAllProfile = () => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const allProfile = response.data;
        console.log(allProfile);
        getProfile(allProfile);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllProfile();
  }, []);

  return (
    <>
      <div className="w-full p-4  mt-8">
        <div className="lg:flex justify-around ">
          <div className="">
            <a href="/#" className="flex items-center text-4xl  font-bold">
              <span className="text-black ">Company Profile</span>
            </a>
          </div>
          {params.company === msg && kind === "company" && (
            <div className="mt-4 md:mt-0 flex">
              <Link
                className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200"
                to="/companies/jobs/view"
              >
                View Jobs
              </Link>
              <Link
                className="py-2 px-3 mr-1 text-sm mb-1 bg-black hover:bg-gray-400 text-white font-bold rounded transition duration-200"
                to="/companies/jobs/add"
              >
                Add Jobs
              </Link>
              <Link
                className="py-2 px-3 text-sm bg-black mb-1 hover:bg-gray-400 text-white font-bold rounded transition duration-200"
                to="/companies/editprofile"
                state={{ data: profile }}
              >
                Edit Profile
              </Link>
            </div>
          )}
        </div>
        <br></br>
        <br></br>

        <div className=" lg:py-0 py-1  grid justify-center px-2 md:px-10">
          <p className="font-bold">Profile</p>
          <div className="grid grid-cols-1   mb-3 ">
            <div>
              <label htmlFor="name">Name</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <p
                  className="w-auto pl-4 pr-6 py-4  rounded  focus:outline-none "
                  id="name"
                >
                  {profile.name}{" "}
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <div className="flex items-center mb-3 rounded mr-2 shadow-lg shadow-white">
                <p
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none "
                  id="desc"
                >
                  {profile.description}
                </p>
              </div>
            </div>
          </div>

          <p className="font-bold mt-4">Specifications</p>

          <div className="grid grid-cols-1 lg:grid-cols-2  mb-3 ">
            <div>
              <label htmlFor="domain">Domain</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <p
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white"
                  id="domain"
                >
                  {profile.department}
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="package">Package</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <p
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white"
                  id="package"
                >
                  {profile.package}
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold mt-4">Contact details</p>
          <div className="grid grid-cols-1 lg:grid-cols-2    mb-3 ">
            <div>
              <label htmlFor="email">Website</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <a
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white"
                  id="web"
                  href="www.tvs.com"
                >
                  {profile.website}
                </a>
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <p
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white"
                  id="email"
                >
                  {profile.email}
                </p>
              </div>
            </div>

            <div>
              <label htmlFor="number">Phone number</label>
              <div className="flex items-center mb-3 shadow-lg shadow-white rounded mr-2">
                <p
                  className="w-full  pl-4 pr-6 py-4  rounded  focus:outline-none shadow-lg shadow-white"
                  id="number"
                >
                  {profile.phoneno}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
