import React from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const PropertiesPage = ({id, title, price, bedroom, bathroom, kitchen, area, city, catigorey, photos}) => {


  return (
    <div className='bg-white rounded-[30px] overflow-visible w-full shadow-xl '>
    <div className="flex flex-col space-y-3 p-3">
        {/* Image */}
        {photos.length > 0 ?
        <Link to={`/properties/property/${id}`}><img className='rounded-[40px] w-full max-h-[160px] object-cover' src={photos[0]} alt="Imahe" /></Link>
       :
        <Link to={`/properties/property/${id}`}><img className='rounded-[40px] w-full max-h-[160px] object-cover' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" /></Link>
        }
        {/* name & Price */}
        <div className='flex justify-between items-center py-2'>
          <div className='font-bold text-xl flex items-center space-x-2 capitalize'>
            <h1>{title.length > 15 ? `${title.slice(0,15)}...` : title}</h1>
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
        {/* Bed & Bath & kitchen */}
        <div className="flex space-x-10 px-4">
        <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
              <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bedroom && <span className='text-orange-600'><FaBed /></span>} <h1 className='flex space-x-2'>{bedroom}</h1> </div>
              <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bathroom && <span className='text-orange-600'><FaBath /></span>} <h1>{bathroom}</h1> </div>
              <div className='text-gray-400 text-sm  flex items-center space-x-1'>{kitchen && <span className='text-orange-600'><GiCampCookingPot /></span>}<h1> {kitchen}</h1></div>
        </div>
    </div>
</div>
  )
}

export default PropertiesPage