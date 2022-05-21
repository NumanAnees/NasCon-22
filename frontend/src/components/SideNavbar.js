import '../css/SideNavbar.css';
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';

export const SideNavbar=( props ) => {

  const location=useLocation();
  return (
    // d-flex flex-column flex-shrink-0 
    <>
      <div className="side_bar">
        <ul className="nav nav-pills flex-column mb-auto">
          {
            <li >
              <Link to='/dashboard' className={`nav-link ${location.pathname.endsWith( "dashboard" )||location.pathname.endsWith( '/' )||location.pathname.endsWith( 'd' )? "side_bar_active":'side_bar_link'}`} aria-current="page">
                {/* <i className="fa-solid fa-user side_bar_icon" /> */}
                <span className='side_bar_icon'> <DashboardIcon /> </span>
                Dashboards
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/jobs' className={`nav-link  ${location.pathname.includes( "job" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <WorkIcon /> </span>

                Jobs
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/candidates' className={`nav-link  ${location.pathname.includes( "candidate" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PeopleIcon /> </span>
                Candidates
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/employees' className={`nav-link  ${location.pathname.includes( "employee" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PeopleIcon /> </span>
                Employees
              </Link>
            </li>
          }
          {
            <li>
              <Link to='/dashboard/smartsearch' className={`nav-link  ${location.pathname.includes( "smartsearch" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <SearchTwoToneIcon /> </span>
                Smart Search
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/consultants' className={`nav-link  ${location.pathname.includes( "consultant" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PeopleIcon /> </span>
                Consultants
              </Link>
            </li>
          }

          {
            <li>
              <Link to='/dashboard/manageroles' className={`nav-link  ${location.pathname.includes( "role" )? "side_bar_active":'side_bar_link'}`}>
                <span className='side_bar_icon'> <PermDeviceInformationIcon /> </span>
                Manage Roles
              </Link>
            </li>
          }




        </ul>
      </div>

    </>

  )
}
