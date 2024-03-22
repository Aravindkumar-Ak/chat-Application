import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[25%] min-h-screen text-center">
    <div
      className="p-6 w-full border-0 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
      <h1 className="text-red-400 font-md ">Signup
      <span className="font-bold text-lg text-blue-500">Chat-App</span>
      </h1>
      <form>
      <div>
          <label className="label p-4">
  <span className="text-base label-text ">Fullname</span>
  </label>
  <input type="text" placeholder="Ex:Adam" className="input input-bordered input-primary w-full max-w-xs" />
</div>
      <div>
          <label className="label p-4">
  <span className="text-base label-text ">Username</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
</div>
<div>
          <label className="label p-4">
  <span className="text-base label-text ">Password</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered input-primary  w-full max-w-xs" />
</div>
<div>
          <label className="label p-4">
  <span className="text-base label-text ">Confirm Password</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered input-primary  w-full max-w-xs" />
</div>
<GenderCheckBox/>
<a href="#" className="underline text-sm text-gray-400 mt-2">Already have an account</a>
<div>
<button className="btn btn-block mt-2 text-lg">Signup</button>
</div>

      </form>
    </div>
  </div>
  )
}

export default Signup