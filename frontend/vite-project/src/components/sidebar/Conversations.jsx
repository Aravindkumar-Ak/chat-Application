import React from 'react'
import Conversation from './Conversation'
import Logout from './Logout'

const Conversations = () => {
  return (
   <div className='my-2 flex flex-col gap-3 justify-center overflow-auto'>
   <Conversation/>
   <Conversation/>
   <Conversation/>
   <Conversation/>
  
   <Logout/>
   </div>
  )
  }

export default Conversations