import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    const data = {
      username: username,
      password: password,
      type: type,
    };

    const env = process.env.NODE_ENV;
    const url =
      env === "production"
        ? "https://placement-tracker-swart.vercel.app/login"
        : "http://localhost:5000/login";

    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.auth === true) {
          setToken(res.data.token);
          setIsSuccess(true);
          navigate("/");
        } else {
          setIsError(true);
          setMsg("Something went wrong");
        }
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setMsg(err.response.data.msg);
      });
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-0  lg:min-h-screen  ">
      <div className="bg-black w-26 lg:min-h-screen py-10 lg:py-0 flex items-center justify-center px-3 lg:px=0">
        <div>
          <Link
            className="flex items-center px-4 py-2 bg-white text-black rounded-md mb-12  "
            to="/"
          >
            <i className="bx  bx-home bx-sm bx-fade-right-hover"></i>

            <span className="mx-4 font-medium">Home</span>
          </Link>
          <h2 className=" mb-12 text-5xl font-bold font-heading text-white">
            Placement System
          </h2>

          <p className="text-lg text-gray-200">
            <span>Students • Staffs • Companies</span>
          </p>
        </div>
      </div>

      <div className="bg-white   lg:min-h-screen flex items-center justify-center">
        <form className="lg:px-10 lg:py-0 py-5 px-5" onSubmit={handleSubmit}>
          {isError && (
            <div
              class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5"
              role="alert"
            >
              <strong class="font-bold">Holy smokes! </strong>
              <span class="block sm:inline">
                {message ? message : "Something went wrong"}
              </span>
            </div>
          )}
          {isSuccess && (
            <div
              class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5"
              role="alert"
            >
              <strong class="font-bold">Wow !! </strong>
              <span class="block sm:inline">Logged in successfully</span>
            </div>
          )}
          <h3 className="mb-10 text-2xl text-black font-bold font-heading text-center">
            Authorized Login
          </h3>
          <div className="flex items-center mb-3 bg-white rounded">
            <input
              className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Username"
            />
          </div>
          <div className="flex items-center  mb-3 bg-white rounded">
            <input
              className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <div className="dropdown inline-block relative w-full mb-3">
            <select
              className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded focus:outline-none bg-gray-200"
              name="type"
              id="type"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="select" selected disabled hidden>
                Select type
              </option>
              <option value="student">student</option>
              <option value="staff">staff</option>
              <option value="company">company</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
