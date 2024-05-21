import { useSelector } from "react-redux"

const Tests = () => {
  const{isDark} = useSelector((state) => state.dark)
  return (
    <div className={`flex space-x-3   rounded-3xl ${isDark ? "bg-black" : "bg-white"}  p-5`}>
    {/* Image */}
      <p className='rounded-[20px] w-20 h-20 bg-gray-300 animate-pulse'></p>
      {/* Texts */}
      <div className="">
        
        {/* Title & Price */}
          <div className='flex justify-between items-center'>
            <p className='bg-gray-300 h-5 rounded-md w-32 animate-pulse'></p>
            <p className='bg-gray-300 h-5 rounded-md w-10 ml-10 animate-pulse'></p>
          </div>

          {/* Location & IconLoccaiton */}
          <p className='bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse'> </p>

          {/* Bed & Bath & Area & Kitchen */}
          <div className="flex space-x-2 px-2 mt-2">
            <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
            <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
            <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
            <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
          </div>
      </div>
  </div>
  )
  
}

export default Tests