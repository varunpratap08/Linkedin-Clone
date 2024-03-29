import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
function Sidebar() {
  const user=useSelector(selectUser)
    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://media.licdn.com/dms/image/D5616AQGcM9T1Ck7WPA/profile-displaybackgroundimage-shrink_350_1400/0/1707425915699?e=1712793600&v=beta&t=wiQdmdC5j2YXcS38SBEe0ELL1ULG66LqP3jBV1FHr7k" alt="" />
        <Avatar src={user.photoUrl}className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{}user.displayName</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
         <p>Profile Viewers</p>
         <p className='sidebar__statNumber'>800</p>
        </div>
        <div className="sidebar__stat">
        <p>Posts Impression</p>
         <p className='sidebar__statNumber'>800</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('SoftwareEngineering')}
        {recentItem('Developer')}
      </div>
    </div>
  )
}

export default Sidebar
