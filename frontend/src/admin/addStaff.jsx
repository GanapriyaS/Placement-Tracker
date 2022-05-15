import React, { useState } from "react";
import axios from "axios";

const AddStaff = () => {
  const [staff, setStaff] = useState({
    name: "",
    dept: "",
    role: "",
    qual: "",
    email: "",
    number: "",
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    const { name, dept, role, qual, email, number } = staff;

    if (name && dept && role && qual && email && number) {
      const data = {
        name: name,
        dept: dept,
        role: role,
        qual: qual,
        email: email,
        number: number,
      };

      const env = process.env.NODE_ENV;
      const url =
        env === "production"
          ? "https://placement-tracker-swart.vercel.app/admin/staff"
          : "http://localhost:5000/admin/staff";

      axios
        .post(url, data)
        .then((res) => {
          setStaff({
            name: "",
            dept: "",
            role: "",
            qual: "",
            email: "",
            number: "",
          });
          setLoading(false);
          console.log(res.status);

          const success = res.data;
          if (success === 1) {
            setIsSuccess(true);
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg);
          setLoading(false);
          setIsError(true);
          setMsg(err.response.data.msg);
        });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setStaff({ ...staff, [name]: value });
  };

  return (
    <>
      <div className="w-full h-screen p-4  mt-8 overflow-y-auto ">
        <div className="grid justify-items-center ">
          <p className="bg-black rounded-full text-white py-3 px-4">
            Add staff
          </p>
        </div>
        <br></br>
        <br></br>
        {isError && (
          <div
            class="bg-red-100  text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <strong class="font-bold">Holy smokes! </strong>
            <span class="block sm:inline">
              {msg ? msg : "Something went wrong"}
            </span>
          </div>
        )}
        {isSuccess && (
          <div
            class="bg-green-100  text-green-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <strong class="font-bold">Wow !! </strong>
            <span class="block sm:inline">Added staff successfully</span>
          </div>
        )}

        <form className=" lg:py-0 py-5  grid justify-center" action="#">
          <p className="font-bold">Profile</p>
          <div className="flex items-center mb-3 ">
            <div>
              <label htmlFor="roll">Name</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="batch">Department</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="dept"
                  name="dept"
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="department"
                />
              </div>
            </div>
          </div>

          <p className="font-bold">Specifications</p>

          <div className="flex items-center mb-3 ">
            <div>
              <label htmlFor="role">Role</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="role"
                  name="role"
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="role"
                />
              </div>
            </div>

            <div>
              <label htmlFor="qual">Qualification</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="qual"
                  name="qual"
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="qualification"
                />
              </div>
            </div>
          </div>
          <p className="font-bold">Contact details</p>
          <div className="flex items-center mb-3 ">
            <div>
              <label htmlFor="email">Email</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="number">Phone number</label>
              <div className="flex items-center mb-3 bg-white rounded mr-2">
                <input
                  className="w-full  pl-4 pr-6 py-4 font-bold rounded  focus:outline-none bg-white"
                  id="number"
                  name="number"
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="PhoneNumber"
                />
              </div>
            </div>
          </div>

          <br></br>
          <button
            className="py-4 px-6 bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Add Staff"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStaff;
