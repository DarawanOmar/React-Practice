import React from 'react'
import CartIteam from './CartIteam'
import { useSelector , useDispatch} from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'


const CardContainer = () => {

    const dispatch = useDispatch();
    const { cartItems , amount , total} = useSelector((store)=> store.carts);

    if(amount < 1){
        return(
            <div className='text-center mt-4 font-serif'>
                <h1 className='text-4xl my-10'> Your Bag</h1>
                <h2 className='text-xl '> Your bag is Currntly Empty</h2>
            </div>
        )
    }

  return (

        <section className='text-center font-bold'>
            <header>
            <h1 className='text-4xl my-10'> Your Bag</h1>
            </header>
            <div>
                {cartItems.map((item) => {
                   return <CartIteam key={item.id} {...item}/>
                })}
            </div>

            <footer className='mt-16 md:mt-0'>
                <hr />
                <h1> Total : <span>{total.toFixed(2)}</span> $ </h1>
                <div>
                    <button 
                    onClick={() => {
                        dispatch(openModal())
                    }}
                    className='text-rose-500 bg-white border-2 border-rose-500 px-8 py-1 rounded-md hover:bg-rose-500 hover:text-white hover:duration-700 font-bold mt-4'> 
                    CLEAR CART
                    </button>
                </div>
            </footer>

        </section>

  )
}

export default CardContainer