import React from 'react'
import ChatBox from '../../components/chatBox.jsx/ChatBox'
import Sidebar from '../../components/sidebar/Sidebar'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[660px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 '>
      <Sidebar/>
      <ChatBox/>
    </div>
  )
}

export default Home