import "./LeftEvents.css";
import User from "./even.jpg"
import IosShareIcon from '@mui/icons-material/IosShare';
import { Button } from 'antd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


export default function CloseFriend({user}) {
  return (
    <div>
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={User} alt="" />
      <span className="sidebarFriendName" style={{"color":"black"}}>{user.username}</span>
    <Button type="primary" className="ms-auto" shape="round" icon={<RemoveRedEyeOutlinedIcon  size="large"/>}>
      <span className='follow'>View</span>
      </Button>   
       </li>
       </div>
  );
}