import React from 'react'
import {FaBed, FaBath} from 'react-icons/fa';
import {GiCampCookingPot, GiHomeGarage} from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';
import { TbChartAreaLineFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const List = ({id,title, price, bedroom, bathroom, kitchen, area, city, catigorey,garage, photos, loader}) => {

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
        
        {/* Bed & Bath & kitchen */}
        <div className="flex space-x-4 px-4">
        <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bedroom > 0 && <> <span className='text-orange-600'><FaBed /></span> <h1 className='flex space-x-2'>{bedroom}</h1></>} </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bathroom > 0 && <> <span className='text-orange-600'><FaBath /></span> <h1>{bathroom}</h1></>} </div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{kitchen > 0 && <> <span className='text-orange-600'><GiCampCookingPot /></span><h1> {kitchen}</h1></>}</div>
        <div className='text-gray-400 text-sm  flex items-center space-x-1'>{garage > 0  && <> <span className='text-orange-600'><GiHomeGarage /></span><h1> {garage}</h1> </>}</div>
        </div>
    </div>

</div>

    // <div className='flex justify-between  space-x-3  p-3 rounded-3xl bg-white shadow-xl'>

    //   {/* Image */}
    //     {photos.length > 0 ?
    //       <Link to={`/properties/property/${id}`}><img className='rounded-[20px] w-20 h-20 object-cover' src={photos[0]} alt="Imahe" /></Link>
    //     :
    //       <Link to={`/properties/property/${id}`}><img className='rounded-[20px] w-20 h-20 object-cover' src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="" /></Link>
    //     }

    //     {/* Texts */}
    //     <div className="">
          
    //       {/* Title & Price */}
    //         <div className='flex justify-between items-center'>
    //           <div className='font-bold text-lg flex items-center space-x-1 capitalize'>
    //             <h1>{title.length > 10 ? `${title.slice(0,10)}..` : title}</h1>
    //             <h1>{catigorey.name}</h1>
    //           </div>
    //         </div>

    //         {/* Location & IconLoccaiton */}
    //         <div className='flex items-center space-x-2 text-gray-400'> 
    //           <span><ImLocation/></span> 
    //           <h1>{city.name}</h1>
    //         </div>

    //         {/* Bed & Bath & Area & Kitchen */}
    //         <div className="flex space-x-2 px-2">
    //           <div className='text-gray-400 text-sm  flex items-center space-x-1'><span className='text-orange-600'><TbChartAreaLineFilled /></span> <h1 className='flex space-x-2'>{area}</h1>  </div>
    //           <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bedroom && <span className='text-orange-600'><FaBed /></span>} <h1 className='flex space-x-2'>{bedroom}</h1> </div>
    //           <div className='text-gray-400 text-sm  flex items-center space-x-1'>{bathroom && <span className='text-orange-600'><FaBath /></span>} <h1>{bathroom}</h1> </div>
    //           <div className='text-gray-400 text-sm  flex items-center space-x-1'>{kitchen && <span className='text-orange-600'><GiCampCookingPot /></span>}<h1> {kitchen}</h1></div>
    //         </div>
    //     </div>
    //           <h1 className='text-blue-700 font-bold text-lg ml-4'>{price}$</h1>
    // </div>
  )
}

export default List