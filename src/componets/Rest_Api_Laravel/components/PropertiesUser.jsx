import React from 'react'
import { useEffect } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
import { useState } from 'react'
import Tests from '../pages/Tests'

const PropertiesUser = ({id,title, price, bedroom, bathroom, kitchen, area, city, catigorey, photos}) => {

    const [loader, setLoader] = useState(false)
    const [user, setuser] = useState([]);

    useEffect(()=>{
        setLoader(true)
        const ftechUser = async () => {
          const response = await axios.get('http://localhost:8000/api/users',{headers:{"Accept" : "application/json"}})
          if(response){
            setuser(response.data.Users)
            setLoader(false)
          }else{
            console.log("error");
            setLoader(false)
          }
        }
        ftechUser()
      },[])

      if(loader){
        return <Tests/>
      }

  return (
    <div className='flex space-x-3   rounded-3xl bg-white'>

    {/* Image */}
    {photos.length > 0 ?
        <Link to={`/properties/property/${id}`}><img className='rounded-[20px] w-20 h-20' src={photos[0]} alt="Imahe" /></Link>
       :
        <Link to={`/properties/property/${id}`}><img className='rounded-[20px] w-20 h-20' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" /></Link>
        }
      
      {/* Texts */}
      <div className="">
        
        {/* Title & Price */}
          <div className='flex justify-between items-center'>
            <div className='font-bold text-lg flex items-center space-x-1 capitalize'>
              <h1>{title.length > 6 ? `${title.slice(0,6)}` : title}</h1>
              <h1>{catigorey.name}</h1> 
            </div>
            <h1 className='text-blue-700 font-bold text-lg ml-12'>{price}$</h1>
          </div>

          {/* Location & IconLoccaiton */}
          <div className='flex items-center space-x-2 text-gray-400'> 
            <span><ImLocation/></span> 
            <h1>{city.name}</h1>
          </div>

          {/* Bed & Bath & Area & Kitchen */}
          <div className="flex space-x-2 px-2">
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><FaBed /></span> <h1 className='flex space-x-2'>{bedroom}</h1> </div>
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><FaBath /></span> <h1>{bathroom}</h1> </div>
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><GiCampCookingPot /></span><h1> {kitchen}</h1></div>
          </div>
      </div>
      
  </div>

  )
}

export default PropertiesUser