import React from 'react'
import user from "../img/even.jpg"
import "../css/eventprofile.css"
import { Button } from 'antd';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Divider } from 'antd';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import LeftBar from './LeftBar/LeftBar'
const Event = () => {
   
  return (
    <>
    <div className='row top-marg ml-4'>
    <div className="col-md-4">
        <img src={user} alt="user" className="profile-image" />   
     <Divider orientation="mid" plain>
             Invite People
      </Divider>
      <LeftBar/>
          
    </div>
    <div className='col-md-8'> 
        <h2 className='name'>Numan Anees <AddLocationAltIcon className='icon-clr' /><small className="city">Lahore</small></h2>
        <small className='profession'>Event type</small>
        <h5 className='mt-4'>4000 ⭐</h5>

        <div>
          <p className='lorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur itaque similique optio soluta! Doloribus iste sed odit quod incidunt earum! Quam beatae eligendi dignissimos quis voluptatem impedit! Ducimus, tenetur?</p>
          <Button type="primary" shape="round" icon={<PersonAddIcon  size="large"/>}>
      <span className='follow'>Join</span>
      </Button>
        </div>
      {/* <div className='d-flex mt-4'>
    <Button type="primary" shape="round" icon={<PersonAddIcon  size="large"/>}>
      <span className='follow'>Follow</span>
      </Button>
       <Button type="danger" shape="round" icon={<MessageIcon  size="large"/>} className="message">
      <span className='follow'>Message</span>
      </Button>
        </div> */}
        <Divider plain>About</Divider>
        <small className='Contact-info'>Event Information</small>
        <h6 className='mt-2 font-12'>Time:  <span className="clr-blue">+923310145083</span></h6>
        <h6 className='font-12'>EventLink:<span className="clr-black">http://localhost:3000/event</span></h6>
        <h6 className='mt-4 font-12'>location:  <span className="clr-email">lahore</span></h6>
        
    </div>
    </div>
  
    </>
  )
}

export default Event