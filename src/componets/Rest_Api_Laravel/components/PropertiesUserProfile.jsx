import React, { useState } from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { TbChartAreaLineFilled } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'
import { RiEdit2Fill } from 'react-icons/ri'
import { GiHomeGarage } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import ModelDeleteProperty from './ModelDeleteProperty'
import { useSelector } from 'react-redux'


const PropertiesUserProfile = ({id,title, price, bedroom, bathroom, kitchen, area, city, catigorey,photos, garage ,loader, deletePropery, setId, setReload, showNotifiDelete}) => {

  const [showModel, setShowModel] = useState(false)
  const{isDark} = useSelector((state) => state.dark)

  if(loader) {
    return (
      <div className="lex flex-col space-y-3 p-3">
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
    )
  }
  return (
    <div className={`${isDark ? " bg-zinc-900 text-white duration-500 " : "bg-neutral-100 text-black duration-500"} rounded-[30px] overflow-visible w-full shadow-xl `}>
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
        <div className='flex space-x-1 absolute top-0 right-2 ml-1 bg-white rounded-b-2xl p-1'>
          <Link to={`/profile/editproperty/${id}`} className=' text-2xl rounded-full text-indigo-500 bg-white'><RiEdit2Fill/></Link>
          <button onClick={() => setShowModel(prev => !prev)} className='text-2xl rounded-full text-indigo-500 bg-white'><MdDelete/></button>
        </div>
        {/* Bed & Bath & kitchen */}
        <div className="flex space-x-4 px-4">
        <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bedroom > 0 && <> <span className='text-orange-600'><FaBed /></span> <h1 className='flex space-x-2'>{bedroom}</h1></>} </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bathroom > 0 && <> <span className='text-orange-600'><FaBath /></span> <h1>{bathroom}</h1></>} </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{kitchen > 0 && <> <span className='text-orange-600'><GiCampCookingPot /></span><h1> {kitchen}</h1></>}</div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{garage > 0  && <> <span className='text-orange-600'><GiHomeGarage /></span><h1> {garage}</h1> </>}</div>
        </div>
    </div>
     {showModel && <ModelDeleteProperty setShowModel={setShowModel} id={id} deletePropery={deletePropery} setId={setId} setReload={setReload} showNotifiDelete={showNotifiDelete}/>}

</div>
   
  )
}

export default PropertiesUserProfile