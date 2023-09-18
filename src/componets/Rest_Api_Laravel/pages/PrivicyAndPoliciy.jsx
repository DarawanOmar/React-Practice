import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const PrivicyAndPoliciy = () => {
  return (
    <div className="p-2 max-w-7xl mx-auto h-screen md:text-2xl">
      <div className="flex items-center md:hidden">
          <Link to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
          <h1 className='text-xl font-bold  '><Link to='/setting'> Term Of Service</Link></h1>
      </div>
      <div className='p-4 md:space-y-10'>
        <div className="">
          <h1 className='font-bold  py-3'>Privacy Choices</h1>
          <p>You have the following choices regarding our collection and use of your personal information:
            Online tracking opt-out. <br />
            <span className='font-bold italic text-sm md:text-2xl'>Blocking cookies in your browser</span>. Most browsers let you remove or reject cookies, including cookies used for interest-based advertising. To do this, follow the instructions in your browser settings.
          </p>
        </div>
        <div className="">
          <h1 className='font-bold py-3'>Security</h1>
          <p>We employ a number of technical, organizational, and physical safeguards designed to protect the personal information we collect. However, no security measures are failsafe and we cannot guarantee the security of personal information.</p>
        </div>
        <div className=" pb-10">
          <h1 className='font-bold py-3'>Children</h1>
          <p>Our Services are not intended for use by children under 18 years of age. If we learn that we have collected personal information through the Services from a child under 18 without the consent of the child’s parent or guardian as required by law, we will delete it.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivicyAndPoliciy