import React from 'react'
import { ChevronDown , ChevronUp } from '../icons/icon'
import { useDispatch } from 'react-redux'
import { removeItem , increase , decrease} from '../features/cart/cartSlice'

export const CartIteam = ({id,amount,price,img,title}) => {

    const dispatch = useDispatch()

  return (
    <>    
    <div className=' max-w-2xl mx-auto grid grid-cols-4  my-3'>
            
            <div className='md:w-1/2 '>
                <img src={img} alt={title} />
            </div>

            <div className=''>
                <h1>{title}</h1>
                <h1> Price:{price}$</h1>
                <button 
                onClick={() => dispatch(removeItem(id))}
                className='bg-white  text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-500  hover:text-white  px-2 rounded-md hover:opacity-75 hover:duration-700'>remove</button>
            </div>
            
            <div className='col-span-2 flex flex-col items-center '>
                <button onClick={()=> dispatch(increase({id}))}><ChevronUp/></button>
                {amount}
                <button onClick={()=> {
                    if(amount<=1){
                        dispatch(removeItem(id))
                        return;
                    }
                    dispatch(decrease({id}))}} ><ChevronDown/></button>
            </div>
    </div>
    </>

  )
}

export default CartIteam