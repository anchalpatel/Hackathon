import { Route, Routes } from "react-router-dom";
import AdministratorDashboard from "./Pages/AdministratorDashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Rule from "./Pages/Rule";
import LogIn from "./Pages/Login";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRouter";
import "./App.css";
import { useState } from "react";
import StudentLogin from "./Pages/StudentLogin";
import Administrator from "./Pages/Adminstrator";
import StudentData from "./Pages/StudentData";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <div className="bg-richblack-800 h-[100vh] w-[100vw] overflow-x-hidden box-border">

      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}></SignUp>}></Route>
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}></LogIn>}></Route>
        <Route path="/studentLogin" element={<StudentLogin setIsLoggedIn={setIsLoggedIn}></StudentLogin>}></Route>
        <Route path="/administrator" element={<Administrator setIsLoggedIn={setIsLoggedIn}></Administrator>}></Route>
        <Route path="/rule" element={<Rule/>}></Route>
        <Route path="/administratordashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <AdministratorDashboard/>
          </PrivateRoute>
        } />
        <Route path="/studentdashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <StudentDashboard/>
          </PrivateRoute>
        } />
        <Route path="/studentData" element={<StudentData></StudentData>}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
