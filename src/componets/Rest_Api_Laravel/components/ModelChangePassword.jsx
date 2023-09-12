import React from 'react'
import { Link } from 'react-router-dom'
import congra from '../img/enthusiastic.png'

const ModelChangePassword = ({setShowModel}) => {
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col px-3">
        <div className= 'px-2 rounded-md bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50 '>

          <div className="flex justify-end items-center p-1">
              <button onClick={() => setShowModel(false)} className='bg-red-500 rounded-md w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
          </div>

          <div className='flex flex-col p-4 justify-center items-center text-center '>
            <div className='flex items-center pb-2 '>
              <h1 className='font-bold text-xl'>Congratulations</h1>
              <img className='w-7 h-7' src={congra} alt="congra" />
            </div>
            <p>Your Password  Have Been Change it You Can Logout and login With New Passwrod</p>
          </div>

            <div className='text-center pb-4'>
              <Link to='/login' className='bg-indigo-500 text-white text-center rounded-lg py-2 px-7 w-full'>Back To Login</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModelChangePassword