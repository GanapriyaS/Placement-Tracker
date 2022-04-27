// import Login from './components/Login'

import Header from './components/navbar/header';
import NavBarLg from './components/navbar/navbar_lg';
// import Home from './components/Home'
// import ViewJobDetails from './companies/viewJobDetails';
import ViewStudents from './staff/viewStudents';
import './App.css';

function App() {
  return (
    <>
    {/* <Login /> */}
    <div className=" bg-gray-300" > 
      <Header />
      <div className="pt-12 lg:flex" >
        <NavBarLg />
        {/* <Home /> */}
        {/* <ViewJobDetails /> */}
        <ViewStudents />
      </div>    
    </div>

    {/* <Router>
    <Routes>
        <Route index element={<Home />} />
        <Route path="student" element={<Home />}>
          <Route path="profile" element={<StudentProfile />} />
          <Route path="applications" element={<Applications />} />
        </Route>

        <Route path="staff" element={<Home />}>
          <Route path="profile" element={<StaffProfile />} />
          <Route path="student/add" element={<AddStudent />} />
          <Route path="student/edit" element={<EditStudent />} />
          <Route path="student/view" element={<ViewStudent />} />
        </Route>

        <Route path="admin" element={<Home />}>
          <Route path="staff/add" element={<StaffProfile />} />
          <Route path="staff/view" element={<AddStudent />} />
          <Route path="staff/edit" element={<EditStudent />} />
          <Route path="companies/approve" element={<ViewStudent />} />
          <Route path="companies/view" element={<ViewStudent />} />
        </Route>

        <Route path="companies" element={<Home />}>
          <Route path="view" element={<Profile />} />
          <Route path="profile" element={<Account />} />
          <Route path="addjobs" element={<Account />} />
          <Route path="editjobs" element={<Account />} />
          <Route path="viewjobs" element={<Account />} />
          <Route path="register" element={<Account />} />
          <Route path="applicants" element={<Account />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </Router> */}

      
    </>
  );
}

export default App;
