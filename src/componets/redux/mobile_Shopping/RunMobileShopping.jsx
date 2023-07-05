import React from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import { calculateTotal , getCartItems} from './features/cart/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Modal from './components/Modal'


const RunMobileShopping = () => {

    const dispatch = useDispatch()
    const {cartItems , isLoading } = useSelector((store)=> store.carts)
    useEffect(()=>{
      dispatch(calculateTotal())
    },[cartItems])
    const {isOpen} = useSelector((store)=> store.modal)

    useEffect(()=>{
      dispatch(getCartItems())
    },[])

    if(isLoading){
      return(
        <div className='text-center text-5xl text-rose-500'>
          Loading...
        </div>
      )
    }
  

  return (
    <div>
     { isOpen && <Modal/> }
        <Navbar/>
        <CardContainer/>
    </div>
  )
}

export default RunMobileShopping