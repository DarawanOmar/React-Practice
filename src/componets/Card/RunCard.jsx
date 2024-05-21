import React from 'react'
              
 
const RunCard = () => {
  return (
    <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 p-4'>

        
        {/* Main */}
        <div className='shadow-2xl'>
            <div className="relative overflow-hidden group rounded-md font-serif">
                {/* Overly */}
                <div className="absolute w-full h-full group-hover:bg-black/50 z-30 transition-all duration-500 cursor-pointer"></div>
                {/* Image */}
                <div className="group-hover:scale-125 duration-500 ">
                    <img className='max-h-[210px] w-full object-cover' src="https://img.freepik.com/premium-psd/3d-rendered-instagram-post-mockup-isolated_359791-278.jpg?size=626&ext=jpg&ga=GA1.1.630880643.1695043245&semt=ais" alt="" />
                </div>
                {/* Text Inside */}
                <h1 className='absolute text-3xl text-white -bottom-full left-4 group-hover:bottom-24 z-30 '>UX/UX Design & Application</h1>
                <div className="flex items-center  ">
                    <h1 className='absolute -bottom-full group-hover:bottom-12 z-30 left-2 duration-500 text-white text-2xl '>Girl Shopp</h1>
                    <p className='absolute -bottom-full group-hover:bottom-12 z-30 left-44 duration-1000 text-white text-xl font-serif border rounded-full px-4 py-1 hover:bg-black cursor-pointer'>Shop Now</p>
                </div>
            </div>
            <div className="flex justify-between items-center p-2">
                <h1 className='font-bold text-xl'> Shopping</h1>
                <h1>Add To Card</h1>
            </div>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sed explicabo. Expedita ut quibusdam similique?</p>
        </div>
        
        
        
        <div className='bg-white shadow-2xl'>
            <div className="relative overflow-hidden group rounded-md  ">
                {/* Overly */}
                <div className="absolute w-full h-full group-hover:bg-black/50 z-10 cursor-pointer transition-all duration-500"></div>
                {/* Image */}
                <div className=" group-hover:scale-125 duration-500">
                    <img className='max-h-[300px] w-full object-cover' src="https://img.freepik.com/free-psd/squares-cards-mockup_211682-285.jpg?size=626&ext=jpg&ga=GA1.1.630880643.1695043245&semt=ais" alt="" />
                </div>
                {/* Text */}
                <h1 className='absolute text-3xl text-white -bottom-full left-4 group-hover:bottom-24 z-30'>UX/UX Design & Application</h1>
                <div className="flex items-center">
                    <h1 className='absolute -bottom-full group-hover:bottom-12 left-4 duration-700 text-white font-serif text-2xl z-30'>Girl Shop</h1>
                    <h1 className='absolute -bottom-full group-hover:bottom-12 left-44 duration-1000 text-white font-serif text-xl z-30 hover:bg-black cursor-pointer border px-4 py-1 rounded-full'>Shop Now</h1>
                </div>
            </div>
            <div className="flex justify-between items-center p-2">
                <h1 className='font-bold text-xl'> Shopping</h1>
                <h1>Add To Card</h1>
            </div>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sed explicabo. Expedita ut quibusdam similique?</p>
        </div>


        {/* <div className="relative overflow-hidden group rounded-md shadow-xl ">
            <div className="absolute w-full h-full group-hover:bg-black/50 z-20 cursor-pointer transition-all duration-500"></div>
            <div className=" group-hover:scale-125 duration-500">
                <img className='max-h-[210px] w-full object-cover' src="https://img.freepik.com/premium-psd/3d-rendered-instagram-post-mockup-isolated_359791-278.jpg?size=626&ext=jpg&ga=GA1.1.630880643.1695043245&semt=ais" alt="" />
            </div>
            <h1 className='absolute text-3xl text-white -bottom-full left-4 group-hover:bottom-24 z-30'>UX/UX Design & Application</h1>
            <div className="flex items-center">
                <h1 className='absolute -bottom-full group-hover:bottom-12 left-4 duration-700 text-white font-serif text-2xl z-30'>Girl Shop</h1>
                <h1 className='absolute -bottom-full group-hover:bottom-12 left-44 duration-1000 text-white font-serif text-xl z-30 hover:bg-black cursor-pointer border px-4 py-1 rounded-full'>Visit</h1>
            </div>
        </div>
        <div className="relative overflow-hidden group rounded-md shadow-xl ">
            <div className="absolute w-full h-full group-hover:bg-black/50 z-20 cursor-pointer transition-all duration-500"></div>
            <div className=" group-hover:scale-125 duration-500">
                <img className='max-h-[210px] w-full object-cover' src="https://img.freepik.com/premium-psd/square-instagram-post-mockup-mosaic_1332-22351.jpg?size=626&ext=jpg&ga=GA1.2.630880643.1695043245&semt=ais" alt="" />
            </div>
            <h1 className='absolute text-3xl text-white -bottom-full left-4 group-hover:bottom-24 z-30'>UX/UX Design & Application</h1>
            <div className="flex items-center ">
                <h1 className='absolute -bottom-full group-hover:bottom-12 left-4 duration-700 text-white font-serif text-2xl z-30'>Girl Shop</h1>
                <h1 className='absolute -bottom-full group-hover:bottom-12 left-44 duration-1000 text-white font-serif text-xl z-30 hover:bg-black cursor-pointer border px-4 py-1 rounded-full'>Visit</h1>
            </div>
        </div> */}

        
    </div>
  )
}

export default RunCard