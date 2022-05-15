import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { LoginContext } from "../App.js";
import axios from "axios";

const AppliedStudents = () => {
  const { auth, kind, msg } = useContext(LoginContext);
  console.log(auth, kind, msg);
  const location = useLocation();
  const [applicants, getApplicants] = useState([]);

  const getAllApplicants = (jobid, companyid) => {
    const env = process.env.NODE_ENV;
    const url =
      env === "production"
        ? "https://placement-tracker-swart.vercel.app/company/" +
          companyid +
          "/job/" +
          jobid +
          "/applicants"
        : "http://localhost:5000/company/" +
          companyid +
          "/job/" +
          jobid +
          "/applicants";

    console.log("app", url);
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const allApplicants = response.data;
        console.log("app", allApplicants);
        getApplicants(allApplicants);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const { data } = location.state;
    getAllApplicants(data.id, msg);
    console.log(data);
  }, []);

  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
      <div className="flex justify-center pb-5">
        <div className="">
          <a
            href="/#"
            className="flex items-center text-3xl lg:text-4xl font-bold"
          >
            <span className="text-black ">Applicants</span>
          </a>
        </div>
      </div>
      <div className="shadow rounded overflow-auto">
        <table className="leading-normal table-auto w-full ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Mail
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Phone no
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Details
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Delete
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Hire
              </th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => {
              const { id, name, email, phoneno } = applicant;

              return (
                <tr className="bg-gray-600 text-gray-200" key={id}>
                  <td className="px-5 py-5 border-b  border-gray-200 text-sm">
                    <p className="whitespace-no-wrap">{index + 1}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
                    <p className="whitespace-no-wrap"> {name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="whitespace-no-wrap">{email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-red-500 text-sm line-through">
                    <p className="whitespace-no-wrap">{phoneno}</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <Link to="/student/profile">
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
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <a href="/delete-task/task.id">
                      <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-red-200 rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-trash-alt bx-xs"></i>
                        </span>
                      </span>
                    </a>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                    <p className="cursor-default">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200  rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-award bx-xs"></i>
                        </span>
                      </span>
                    </p>
                  </td>
                </tr>
              );
            })}

            <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
              <td
                colSpan="9"
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
              >
                <div className="flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    No students added yet
                  </span>
                </div>
              </td>
            </tr>

            <tr className=" border-b border-gray-200 bg-white text-sm ">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedStudents;
