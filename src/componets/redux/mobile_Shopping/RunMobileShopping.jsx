import React from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import { calculateTotal } from './features/cart/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Modal from './components/Modal'

const RunMobileShopping = () => {

    const dispatch = useDispatch()
    const {cartItems} = useSelector((store)=> store.carts)
    useEffect(()=>{
        dispatch(calculateTotal())
    },[cartItems])
    const {isOpen} = useSelector((store)=> store.modal)



  return (
    <div>
     { isOpen && <Modal/> }
        <Navbar/>
        <CardContainer/>
    </div>
  )
}

export default RunMobileShopping