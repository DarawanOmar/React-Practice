import React, { useState } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Tests from '../pages/Tests'
import ModelDeleteProperty from './ModelDeleteProperty'


const PropertiesUserProfile = ({id,title, price, bedroom, bathroom, kitchen, area, city, catigorey, loader, deletePropery, setId}) => {

  const [showModel, setShowModel] = useState(false)

  if(loader){
    return <Tests/>
  }
  return (
    <div className='flex justify-between rounded-3xl bg-white'>

      {/* Image */}
        <Link to={`/properties/property/${id}`}><img className='rounded-[20px] w-20 h-20' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" /></Link>
        
        {/* Texts */}
        <div className="">
          
          {/* Title & Price */}
            <div className='flex justify-between items-center'>
              <div className='font-bold text-lg flex items-center space-x-1 capitalize'>
                <h1>{title.length > 4 ? `${title.slice(0,4)}` : title}</h1>
                <h1>{catigorey.name}</h1> 
              </div>
              <h1 className='text-blue-700 font-bold text-lg ml-4'>{price}$</h1>
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
        <div className="flex">
          <Link ><button onClick={() => setShowModel(prev => !prev)}><MdDelete/></button></Link>
          <Link to={`/profile/editproperty/${id}`} ><RiEdit2Fill/></Link>
        </div>
        {showModel && <ModelDeleteProperty setShowModel={setShowModel} id={id} deletePropery={deletePropery} setId={setId}/>}
        
    </div>
  )
}

export default PropertiesUserProfile