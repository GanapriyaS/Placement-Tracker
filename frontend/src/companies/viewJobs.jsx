import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App.js";
import axios from "axios";

const ViewJobs = () => {
  const { auth, kind, msg } = useContext(LoginContext);
  console.log(auth, kind, msg);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMsg] = useState("");

  const [jobs, getJobs] = useState([]);
  const env = process.env.NODE_ENV;
  const url =
    env === "production"
      ? "https://placement-tracker-swart.vercel.app/company/" + msg + "/job"
      : "http://localhost:5000/company/" + msg + "/job";

  console.log(url);

  const deleteJob = (id) => {
    const delete_url =
      env === "production"
        ? "https://placement-tracker-swart.vercel.app/company/" +
          msg +
          "/job/" +
          id
        : "http://localhost:5000/company/" + msg + "/job/" + id;
    setIsError(false);
    axios
      .delete(delete_url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const success = res.data;
        if (success === 1) {
          setIsSuccess(true);
          getAllJobs();
        }
      })
      .catch((err) => {
        setIsError(true);
        setMsg(err.response.data.msg);
      });
  };

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
    <div className=" p-4 pt-10 w-full h-screen  ">
      <div className="flex justify-center pb-5">
        <div className="">
          <p className="flex items-center text-3xl lg:text-4xl font-bold">
            <span className="text-black ">Existing jobs</span>
          </p>
        </div>
      </div>
      {isError && (
        <div
          className="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5"
          role="alert"
        >
          <strong className="font-bold">Holy smokes! </strong>
          <span className="block sm:inline">
            {message ? message : "Something went wrong"}
          </span>
        </div>
      )}
      {isSuccess && (
        <div
          className="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5"
          role="alert"
        >
          <strong className="font-bold">Wow !! </strong>
          <span className="block sm:inline">Deleted job successfully</span>
        </div>
      )}
      <div className="shadow rounded overflow-auto">
        <table className="leading-normal table-auto w-full ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Role
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Domain
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Candidates
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Delete
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Edit
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="text-black">
              <td className="px-5 py-3 border-b  border-gray-200 text-sm">
                <p className="whitespace-no-wrap"></p>
              </td>
              <td className="px-5 py-3 border-b border-gray-200 text-red-500 text-sm line-through">
                <input
                  className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white"
                  id="role"
                  type="search"
                  placeholder="Search role"
                />
              </td>
              <td className="px-5 py-3 border-b border-gray-200  text-sm">
                <input
                  className=" pl-4 pr-6 py-2 font-bold rounded  focus:outline-none bg-white"
                  id="domain"
                  type="search"
                  placeholder="Search domain"
                />
              </td>
            </tr> */}

            {jobs.map((job, index) => {
              const { id, name, dept } = job;
              const link = "/companies/jobs/details/" + id;
              return (
                <tr className="bg-gray-600 text-gray-200" key={id}>
                  <td className="px-5 py-5 border-b  border-gray-200 text-sm">
                    <p className="whitespace-no-wrap">{index + 1}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="whitespace-no-wrap"> {name} </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="whitespace-no-wrap"> {dept} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <Link to="/companies/applicants" state={{ data: job }}>
                      <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-200  rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-comment-detail bx-xs"></i>
                        </span>
                      </span>
                    </Link>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                    <span
                      onClick={() => deleteJob(id)}
                      className=" cursor-pointer  relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 rounded-xl"
                      ></span>
                      <span className="relative">
                        <i className="bx bx-trash-alt bx-xs"></i>
                      </span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <Link to="/companies/jobs/edit" state={{ data: job }}>
                      <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-blue-200 rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-edit-alt bx-xs"></i>
                        </span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                    <Link to={link}>
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200  rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-award bx-xs"></i>
                        </span>
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            })}

            {Object.keys(jobs).length === 0 && (
              <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                <td
                  colSpan="9"
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                >
                  <div className="flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-gray-900">
                      No jobs added yet
                    </span>
                  </div>
                </td>
              </tr>
            )}

            {/* <tr className=" border-b border-gray-200 bg-white text-sm ">
              <td colSpan="9">
                <div className="px-5 py-5 bg-gray-100 flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <div className="inline-flex xs:mt-0">
                    <a
                      className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                      href="?page=1"
                    >
                      &laquo; 1
                    </a>
                    <a
                      className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                      href="?page= page_obj.previous_page_number "
                    >
                      prev
                    </a>
                    &nbsp;
                    <a
                      className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l hover:text-white"
                      href="?page= page_obj.next_page_number "
                    >
                      next
                    </a>
                    <a
                      className=" text-sm px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r hover:text-white"
                      href="?page= page_obj.paginator.num_pages "
                    >
                      last &raquo;
                    </a>
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewJobs;
