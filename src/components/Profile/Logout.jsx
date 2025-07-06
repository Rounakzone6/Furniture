import React from 'react'

const Logout = () => {
  return (
    <div>
      <p className='text-lg md:text-2xl font-medium'>Logout</p>
      <p>Are you sure you want to log out?</p>
      <button type='submit' className='text-white font-medium px-4 py-2 bg-[#001b4d]'>Yes, Logout</button>
    </div>
  )
}

export default Logout