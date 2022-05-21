import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navbar = (props) => {
  return(
  <nav className="navbar navbar-expand nav_bar fixed-top">
  <div className="container-fluid">
        <Link className="navbar-brand nav_bar_name" to="/dashboard">VeteranMeet</Link>
    <div className id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item notify_item">
          <a className="notify position-relative">
            <i className="fas fa-bell" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill num_badge">
              99+
            </span></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav_bar_user" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <div className="nav_img_div">
           <img className='nav_img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="img" />
           </div>
           
            Saleena Gomez
            <i className="fa-solid fa-angle-down user_down" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><Link className="dropdown-item" to="/dashboard/settings"> <span className='me-2'><SettingsIcon /></span>  Profile settings</Link></li>
                <li><Link className="dropdown-item" to="/login"><span className='me-2'><LogoutIcon /></span>Logout</Link></li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
};
