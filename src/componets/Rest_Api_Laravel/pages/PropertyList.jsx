import React from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import { GiCampCookingPot } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'

const PropertyList = ({title, price, bedroom, bathroom, kitchen, area, city, catigorey, user, description}) => {
  return (
    <div className=' '>
        <div className="bg-white rounded-2xl flex flex-col space-y-3 p-3">
            {/* Image */}
            <img className='rounded-[35px] max-h-[160px] object-cover' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" />
            {/* name & Price */}
            <div className='flex justify-between items-center py-2'>
            <div className='font-bold text-xl flex items-center space-x-2 capitalize'>
                <h1>{title}</h1>
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
            {/* Bed & Bath & kitchen */}
            <div className="flex space-x-10 px-4">
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><FaBed /></span> <h1 className='flex space-x-2'>{bedroom}</h1> <span>Bed</span> </div>
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><FaBath /></span> <h1>{bathroom}</h1><span>Bath</span> </div>
            <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><GiCampCookingPot /></span><h1> {kitchen}</h1> <span>Kitchen</span></div>
            </div>
        </div>
        <div className="flex flex-col space-y-3 p-3 bg-white rounded-2xl my-8 ">
            <div className='flex items-center'>
                <img className='w-12 h-12 object-cover rounded-xl' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            </div>
            <div className="p-1">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default PropertyList