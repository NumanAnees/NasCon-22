import './App.css';
import { Navbar } from './components/Navbar';
import { SideNavbar } from './components/SideNavbar';
import SignUpForm from './components/Signup';
import Dashboard from './components/Dashboard'
import LoginForm from './components/Login';
import UserProfile from "./components/UserProfile"

import { Link, Outlet } from 'react-router-dom'


// import ProtectedRoute from './components/ProtectedRoute.js';
import {
  Routes,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import Landing from "./components/LandingPage/Landing";
import Profile from './components/Profile';


function App() {



  return (
    <>
      <Routes>

        <Route exact path="/" element={< Landing />} />


        <Route exact path="/signup" element={< SignUpForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/userprofile" element={<UserProfile />} />








        <Route exact path="dashboard" element={
          //  <ProtectedRoute role={[ 'admin', 'user' ]} redirectPath='/login'>
          <>
            <Navbar />
            <SideNavbar />
            <div className="outlet_container">
              <Outlet />
            </div>
          </>
          // </ProtectedRoute>
        }
        >
          {/****************** ROUTES  *****************/}

          <Route exact path="" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Dashboard />
            // </ProtectedRoute> 
          }
          />



          <Route exact path="settings" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Profile />
            // </ProtectedRoute> 
          }
          />






        </Route>
      </Routes>








    </>
  );
}

export default App;
