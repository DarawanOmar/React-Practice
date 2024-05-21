import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ListPropritesFavoraite from '../components/ListPropritesFavoraite'
import Lottie from 'lottie-react'
import sad from '../components/sademoji.json'
import { useSelector } from 'react-redux'

const FavoraiteProperties = () => {
  const [propertiesFavoraite, setPropertiesFavoraite] = useState([]);
  const[reload, setReload] = useState(false);
  const[loader, setLoader] = useState(false);
  const{isDark} = useSelector((state) => state.dark)

  useEffect(()=>{
    setLoader(true)
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8000/api/propertyfavoraite2`,{headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }})
      if(response){
        setPropertiesFavoraite(response.data.data)
        setLoader(false)
      }else{
        console.log("No Data Back");
        setLoader(false)
      }
    }
    fetchData()
  },[reload])

  if(loader) {
    return (
      <div className={isDark ? "bg-black min-h-screen" : "bg-white"}>
        <div className='max-w-7xl mx-auto'>
        <div className="flex justify-between items-center p-2 px-4">
          <div className="flex items-center space-x-2">
            <Link to='/home' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
            <h1 className='text-xl font-bold '><Link to='/home'>Favoraite Properties </Link></h1>
          </div>
        </div>
        <h1 className='text-center mt-4 font-bold text-xl my-3'>This is Your Favoraite Properties....</h1>
        <div className='flex flex-col'>
          <div className="lex flex-col space-y-3 p-8 pb-14">
                <p className='rounded-[40px] w-full h-[140px] bg-gray-300 animate-pulse'></p>
                <div className='flex justify-between items-center px-4'>
                  <p className='bg-gray-300 rounded-md h-6 w-32 animate-pulse'></p>
                  <p className='bg-gray-300 rounded-md h-6 w-10 animate-pulse'></p>
                </div>
                <p className='bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse ml-4'> </p>
                <div className="flex space-x-4 px-2 mt-2 ml-4">
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                </div>
          </div>
          <div className="lex flex-col space-y-3 p-8 pb-14">
                <p className='rounded-[40px] w-full h-[140px] bg-gray-300 animate-pulse'></p>
                <div className='flex justify-between items-center px-4'>
                  <p className='bg-gray-300 rounded-md h-6 w-32 animate-pulse'></p>
                  <p className='bg-gray-300 rounded-md h-6 w-10 animate-pulse'></p>
                </div>
                <p className='bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse ml-4'> </p>
                <div className="flex space-x-4 px-2 mt-2 ml-4">
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                </div>
          </div>
        </div>
          </div>
      </div>
    )
  }

  return (
    <div className={isDark ? " bg-black text-white  duration-500" : "bg-neutral-100 text-black duration-500"}>
      <div className={`${isDark ? " bg-black text-white min-h-screen duration-500" : "bg-neutral-100 text-black duration-500"} max-w-7xl mx-auto `}>
        {/* Top Text & Button Back */}
         <div className="flex justify-between items-center p-2 px-4">
              <div className="flex items-center space-x-2">
                  <Link to='/home' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                  <h1 className='text-xl font-bold '><Link to='/home'>Favoraite Properties </Link></h1>
              </div>
          </div>
         {propertiesFavoraite.length > 0 &&  <h1 className='text-center mt-4 font-bold text-xl my-3'>This is Your Favoraite Properties....</h1>}
        {/* List Properties */}
        <div className="p-4 pb-14">
          {propertiesFavoraite.length > 0 ? (<>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3'>
              {propertiesFavoraite.map((pro,index) => {
                return  <ListPropritesFavoraite key={index} property={JSON.parse(pro.property)[0]} setReload={setReload}  />
              })}
            </div>
          </>):
          (<>
            <div className='flex justify-center items-center h-screen'>
              <h1 className='text-center font-bold'>You Don't Have Favoraite Property Yet</h1>
              <span className='h-10 w-10'>
                <Lottie animationData={sad} loop={true}/>
              </span>
            </div>
          </>)}
        </div>
      </div>
    </div>
  )
}

export default FavoraiteProperties