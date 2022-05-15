import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewCompanies = () => {
  const [companies, getCompanies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const env = process.env.NODE_ENV;
  const url =
    env === "production"
      ? "https://placement-tracker-swart.vercel.app/admin/"
      : "http://localhost:5000/admin/";

  const disapproveCompany = (id) => {
    const disapprove_url =
      env === "production"
        ? "https://placement-tracker-swart.vercel.app/admin/disapprove/" + id
        : "http://localhost:5000/admin/disapprove/" + id;
    setIsError(false);
    axios
      .put(disapprove_url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const success = res.data;
        if (success === 1) {
          setIsSuccess(true);
          getAllCompanies();
        }
      })
      .catch((err) => {
        setIsError(true);
        setMsg(err.response.data.msg);
      });
  };

  const getAllCompanies = () => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          approval: true,
        },
      })
      .then((response) => {
        const allCompanies = response.data;
        getCompanies(allCompanies);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div className=" p-4 pt-10 w-full h-screen  ">
      <div className="flex justify-center pb-5">
        <div className="">
          <a
            href="/#"
            className="flex items-center text-3xl lg:text-4xl font-bold"
          >
            <span className="text-black ">Companies Data</span>
          </a>
        </div>
      </div>
      {isError && (
        <div
          className="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5"
          role="alert"
        >
          <strong className="font-bold">Holy smokes! </strong>
          <span className="block sm:inline">
            {msg ? msg : "Something went wrong"}
          </span>
        </div>
      )}
      {isSuccess && (
        <div
          className="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5"
          role="alert"
        >
          <strong className="font-bold">Wow !! </strong>
          <span className="block sm:inline">
            Disapproved company successfully
          </span>
        </div>
      )}
      <div className="shadow rounded overflow-auto">
        <table className="leading-normal table-auto w-full ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Domain
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Disapprove
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
                  id="name"
                  type="search"
                  placeholder="Search name"
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
            {companies.map((company, index) => {
              const { id, name, department } = company;
              return (
                <tr className="bg-gray-600 text-gray-200" key={id}>
                  <td className="px-5 py-5 border-b  border-gray-200 text-sm">
                    <p className="whitespace-no-wrap">{index + 1}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm ">
                    <p className="whitespace-no-wrap">{name} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="whitespace-no-wrap">{department}</p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p
                      className="cursor-pointer"
                      onClick={() => disapproveCompany(id)}
                    >
                      <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-red-200 rounded-xl"
                        ></span>
                        <span className="relative">
                          <i className="bx bx-trash-alt bx-xs"></i>
                        </span>
                      </span>
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 text-sm ">
                    <Link to={"/companies/profile/" + id}>
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

            {Object.keys(companies).length === 0 && (
              <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                <td
                  colSpan="9"
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                >
                  <div className="flex flex-col xs:flex-row items-center xs:justify-between">
                    <span className="text-xs xs:text-sm text-gray-900">
                      No companiesapproved yet
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCompanies;
