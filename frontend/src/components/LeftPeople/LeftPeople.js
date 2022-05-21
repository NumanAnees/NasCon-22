import "./LeftPeople.css";
import User from "./user.png"
import IosShareIcon from '@mui/icons-material/IosShare';
import { Button } from 'antd';


export default function CloseFriend({user}) {
  return (
    <div>
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={User} alt="" />
      <span className="sidebarFriendName" style={{"color":"black"}}>{user.username}</span>
    <Button type="primary" className="ms-auto" shape="round" icon={<IosShareIcon  size="large"/>}>
      <span className='follow'>Invite</span>
      </Button>   
       </li>
       </div>
  );
}