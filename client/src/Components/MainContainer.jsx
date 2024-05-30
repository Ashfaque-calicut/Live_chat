import React from 'react'
import'./myStyles.css'
import Sidebar from './Sidebar'
// import WorkArea from './WorkArea'
import ChatArea from './ChatArea'

function MainContainer() {
  return (
    <div className='main-container'>
      <Sidebar/>
      {/* <WorkArea/> */}
      <ChatArea/>
    </div>
  )
}

export default MainContainer