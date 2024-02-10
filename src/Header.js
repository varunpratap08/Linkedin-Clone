import React from 'react'
import'./Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationIcon from '@mui/icons-material/Notifications'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/features/userSlice';

function Header() {
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
   dispatch(logout()) 
   auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkdin-icon" />
        <div className="header__search">
           <SearchIcon/>
          <input type="text"  placeholder='Search'/>
        </div>
        </div>
      <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="Messaging"/>
      <HeaderOption Icon={NotificationIcon} title="Notifications"/>
      <HeaderOption avatar="https://media.licdn.com/dms/image/D4D03AQGhphE0SQIKpg/profile-displayphoto-shrink_800_800/0/1682831811750?e=1712793600&v=beta&t=GxqTZOV5TPB4dANwdvuidgh_YpVbw4FvWC8RI21OWyE" title="me" onClick={logoutOfApp}
      />
      </div>
    </div>
  )
}

export default Header
