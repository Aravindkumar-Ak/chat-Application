import React from 'react'
import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='px-2 my-2'>
<div className='w-full relative'>
    <input className='border w-full block p-2.5 rounded-xl border-0 text-gray-950 text-sm' placeholder='Send a message'/>
    <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
 					<BsSend />
		</button>
</div>
    </form>
  )
}

export default MessageInput