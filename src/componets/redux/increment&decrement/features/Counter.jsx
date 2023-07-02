import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment , decrement , reset , incrementByAmount } from './countSlice'
const Counter = () => {

    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();
    const [incrementAmount , setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () =>{
        setIncrementAmount(0)
        dispatch(reset())
    }


  return (
    <div>
        <div className='text-4xl font-serif'>
            <h1 className='text-center my-20 text-7xl'>{count}</h1>
            <div className='space-x-4 my-4  text-center items-center'>
                <button onClick={() => resetAll()} className='bg-black text-white px-4 py-2 rounded-md hover:opacity-75 hover:duration-700'>سڕینەوە</button>
                <button onClick={() => dispatch(decrement())} className='bg-black text-white px-4 py-2 rounded-md hover:opacity-75 hover:duration-700'>کەمکردن</button>
                <button onClick={() => dispatch(increment())} className='bg-black text-white px-4 py-2 rounded-md hover:opacity-75 hover:duration-700'>زیادکردن</button>
                <div className='space-x-6 m-6 '>
                    <input  onChange={(e)=> setIncrementAmount(e.target.value)} type="text" placeholder='ژماردن' className='text-center border-2 border-black rounded-md p-2 my-4 w-[380px]' />
                    <button onClick={() => dispatch(incrementByAmount(addValue))} className=' bg-black text-white px-4 py-2 rounded-md hover:opacity-75 hover:duration-700'>ژماردن بەپێ ژماردن</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter