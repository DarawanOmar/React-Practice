import React from 'react'
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer'
import { calculateTotal , getCartItems} from './features/cart/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Modal from './components/Modal'
import ScaleLoader  from 'react-spinners/ScaleLoader'


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
      <div className='flex flex-col justify-center items-center h-screen '>
        <h1 className='text-4xl font-bold font-serif my-8'> Loading..</h1>
         <ScaleLoader size={70} color='#e817c5' height="200px" width='50px' />
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