import React from "react";
import StudentDetails from "../student/studentDetails";
const Home = () => {
  return (
    <>
      <div className="w-full  lg:p-4">
        <div className="flex justify-center pb-5 p-4 pt-8 mt-6 px-10">
          <div className="">
            <a
              href="/#"
              className="flex items-center text-2xl lg:text-5xl font-bold "
            >
              <span className="text-black ">
                GOVERNMENT COLLEGE OF TECHNOLOGY
              </span>
            </a>
          </div>
        </div>
        <br></br>
        <p className="font-bold text-justify text-sm lg:text-lg px-10">
          {" "}
          The institute offers undergraduate courses leading to the degree of
          Bachelor of Engineering and postgraduate courses award the Master of
          Engineering degree. The Institution affiliated to Anna University,
          Chennai offers 9 Full-Time Under Graduate programmes, 4 Part-Time
          Under Graduate programmes and 11 Post Graduate programmes. The
          Institution has been exercising academic autonomy since 1987.All the
          Departments are recognized as center’s for research by Anna
          University.7 Under Graduate Programmes and 3 Post Graduate Programmes
          are accredited by the National Board of Accreditation.Undergraduate
          students are admitted based on competitive student rankings in higher
          secondary examination.
        </p>

        <br></br>
        <br></br>
        <StudentDetails />
      </div>
    </>
  );
};

export default Home;
