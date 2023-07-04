import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
const Modal = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <div className=" mt-72 bg-transparent ">
            <div className="flex flex-col  items-center font-serif bg-gray-200 max-w-max mx-auto p-5">
                <h1 className='my-4'> Remove All Item From Your Shopping Cart ?</h1>
                <div className="flex space-x-8">
                    <button
                    onClick={()=> {
                        dispatch(closeModal())
                        dispatch(clearCart())}} 
                    className='bg-white text-indigo-500 px-3 py-1 rounded-md border-2 border-indigo-500 hover:bg-indigo-500 hover:duration-500 hover:text-white'>Confirm</button>
                    <button
                    onClick={()=> dispatch(closeModal())} 
                    className='bg-white text-rose-500 px-3 py-1 rounded-md border-2 border-rose-500 hover:bg-rose-500 hover:duration-500 hover:text-white'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal