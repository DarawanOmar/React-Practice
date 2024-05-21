import React from 'react'
import { useEffect } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot, GiHomeGarage } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
import { useState } from 'react'
import Tests from '../pages/Tests'
import { useSelector } from 'react-redux'

const PropertiesUser = ({id,title, price, bedroom, bathroom, kitchen, area, city, catigorey, photos, garage}) => {

    const [loader, setLoader] = useState(false)
    const [user, setuser] = useState([]);
    const{isDark} = useSelector((state) => state.dark)

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
    <div className={` rounded-[30px] overflow-visible w-full shadow-xl ${isDark ? " bg-zinc-800 text-white  duration-500" : "bg-neutral-100 text-black duration-500"}`}>
      <div className="relative flex flex-col space-y-3 p-3">
          {/* Image */}
          {photos.length > 0 ?
          <Link to={`/properties/property/${id}`}><img className='rounded-[40px] w-full max-h-[160px] object-cover' src={photos[0]} alt="Imahe" /></Link>
        :
          <Link to={`/properties/property/${id}`}><img className='rounded-[40px] w-full max-h-[160px] object-cover' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" /></Link>
          }
          {/* name & Price */}
          <div className='flex justify-between items-center py-2'>
            <div className='font-bold text-xl flex items-center space-x-2 capitalize'>
            <h1>{title.length > 6 ? `${title.slice(0,6)}` : title}</h1>
            <h1>{catigorey.name}</h1> 
            </div>
            <h1 className='text-blue-700 font-bold text-xl'>{price}$</h1>
          </div>
          {/* Location & area */}
          <div className="flex justify-between items-center text-gray-400">
            <div className='flex items-center space-x-2'> <span><ImLocation/></span> <h1>
                {city.name}
              </h1></div>
            <h1>({area}sqrt)</h1>
          </div>
        <div className="flex space-x-4 px-4">
          <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
          <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bedroom > 0 && <> <span className='text-orange-600'><FaBed /></span> <h1 className='flex space-x-2'>{bedroom}</h1></>} </div>
          <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bathroom > 0 && <> <span className='text-orange-600'><FaBath /></span> <h1>{bathroom}</h1></>} </div>
          <div className='text-gray-400 text-sm  flex items-center space-x-1'>{kitchen > 0 && <> <span className='text-orange-600'><GiCampCookingPot /></span><h1> {kitchen}</h1></>}</div>
          <div className='text-gray-400 text-sm  flex items-center space-x-1'>{garage > 0  && <> <span className='text-orange-600'><GiHomeGarage /></span><h1> {garage}</h1> </>}</div>
        </div>
      </div>
  </div>

  )
}

export default PropertiesUser