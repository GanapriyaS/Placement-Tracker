import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import NoMatch from './components/nomatch'
// import Footer from './components/footer';

import NavBar from './components/navbar';
import AddStaff from './admin/addStaff';
import ViewCompanies from "./admin/viewCompanies";
import ViewStaffs from "./admin/viewStaffs";
import EditStaff from "./admin/editStaff";
import ApproveCompanies from "./admin/approveCompanies";


import AddJob from "./companies/addJob";
import AppliedStudents from "./companies/appliedStudents";
import CompanyProfile from "./companies/companyProfile";
import Recruiters from "./companies/recruiters";
import RegisterCompanies from "./companies/registerCompanies";
import ViewJobDetails from './companies/viewJobDetails';
import ViewJobs from "./companies/viewJobs";
import EditJob from "./companies/editJob";
import EditCompaniesProfile from "./companies/editCompaniesProfile";

import AddStudent from "./staff/addStudent";
import StaffProfile from "./staff/staffProfile";
import ViewStudents from './staff/viewStudents';
import EditStudent from './staff/editStudent';
import EditStaffProfile from "./staff/editStaffProfile";

import AppliedJobs from "./student/appliedJobs";
import StudentProfile from "./student/studentProfile";
import StudentDetails from "./student/studentDetails";
import EditStudentProfile from "./student/editStudentProfile";

import './App.css';


function App() {
  return (
    <Router>

        
        
        <Routes>
        
     
        <Route path="login" element={<Login />} />
        <Route index element={<NavBar  type="home"/>} />


        <Route path="student" element={<NavBar type="other" />}>
          <Route path="profile" element={<StudentProfile />} />
          <Route path="editprofile" element={<EditStudentProfile />} />
          <Route path="appliedjobs" element={<AppliedJobs />} />
          <Route path="view" element={<StudentDetails />} />
        </Route>

        <Route path="staff" element={<NavBar type="other" />}>
          <Route path="profile" element={<StaffProfile />} />
          <Route path="editprofile" element={<EditStaffProfile />} />
          <Route path="student/add" element={<AddStudent />} />
          <Route path="student/edit" element={<EditStudent />} />
          <Route path="student/view" element={<ViewStudents />} />
        </Route>

        <Route path="admin" element={<NavBar type="other" />}>
          <Route path="staff/add" element={<AddStaff />} />
          <Route path="staff/view" element={<ViewStaffs />} />
          <Route path="staff/edit" element={<EditStaff />} />
          <Route path="companies/approve" element={<ApproveCompanies />} /> 
          <Route path="companies/view" element={<ViewCompanies />} />
        </Route>

        <Route path="companies" element={<NavBar type="other" />}>
          <Route path="view" element={<Recruiters />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="jobs/add" element={<AddJob />} />
          <Route path="jobs/edit" element={<EditJob />} />
          <Route path="jobs/view" element={<ViewJobs />} />
          <Route path="jobs/details" element={<ViewJobDetails />} />
          <Route path="register" element={<RegisterCompanies />} />
          <Route path="applicants" element={<AppliedStudents />} />
          <Route path="editprofile" element={<EditCompaniesProfile />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
      
      
    </Router>
  );
}

export default App;
