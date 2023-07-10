import React from 'react'

const Button = ({ setReqType , buttonText , reqType}) => {
  return (
    <button
      className=' text-2xl text-center border-2 border-black hover:bg-black hover:text-white p-4'
      type='button'
      onClick={()=> setReqType(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default Button