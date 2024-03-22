import React from 'react'
import {TiMessages} from "react-icons/ti"

const NoChat = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 w-full h-full'>
    <div className='md:text-lg sm:text-sm text-white px-4 flex flex-col items-center '>
        <p>Welcome Michael </p>
        <p>Select a chat to start message</p>
    </div>
    <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
  )
}

export default NoChat