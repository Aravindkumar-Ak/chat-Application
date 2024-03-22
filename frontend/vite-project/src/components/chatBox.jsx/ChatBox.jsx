import React from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import NoChat from './NoChat';



const ChatBox = () => {
    const isMessage=true;
  return (
    <div className='flex flex-col mx-2 md:min-w-[450px]'>
        {isMessage ?
        <>
        <div className='bg-gray-500 px-2 py-2 rounded-xl'>
            <span className='label-text'>To: </span>
            <span className='text-gray-900 font-bold'>Michel</span>
        </div>
        
        <Messages/>
        <MessageInput/>
        </>
:<NoChat/>}
    </div>
  )
}

export default ChatBox

