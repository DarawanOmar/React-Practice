import React from 'react'
import format from 'date-fns/format'
const Footer = () => {
    const today = new Date()
  return (
    <div className=''>

        <p className=' text-center p-4 text-xl  bg-sky-500 text-white' >CopyRight &copy;{today.getFullYear()}</p>

    </div>
  )
}

export default Footer