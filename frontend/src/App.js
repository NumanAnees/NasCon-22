import './App.css';
import { Navbar } from './components/Navbar';
import { SideNavbar } from './components/SideNavbar';
import SignUpForm from './components/Signup';
import Dashboard from './components/Dashboard'
import LoginForm from './components/Login';
import Events from "./components/Events"
import UserProfile from "./components/UserProfile"
import Invitations from "./components/invitations"
import { Link, Outlet } from 'react-router-dom'
import LoginOrgProfile from "./components/LoginOrgProfile"


// import ProtectedRoute from './components/ProtectedRoute.js';
import {
  Routes,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";
import Landing from "./components/LandingPage/Landing";
import Profile from './components/Profile';
import Organization from './components/Organization';
import People from './components/People';
import OrgProfile from './components/OrgProfile';


function App() {



  return (
    <>
      <Routes>

        <Route exact path="/" element={< Landing />} />


        <Route exact path="/signup" element={< SignUpForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        <Route exact path="/orgprofile" element={<OrgProfile />} />
        <Route exact path="/loginorgprofile" element={<LoginOrgProfile />} />








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
           <Route exact path="organizations" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Organization />
            // </ProtectedRoute> 
          }
          />
          <Route exact path="people" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <People />
            // </ProtectedRoute> 
          }
          />
          <Route exact path="events" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Events />
            // </ProtectedRoute> 
          }
          />
           <Route exact path="invitations" element={
            // <ProtectedRoute role={[ 'admin' ]}>
            <Invitations />
            // </ProtectedRoute> 
          }
          />

      

        </Route>
      </Routes>








    </>
  );
}

export default App;
