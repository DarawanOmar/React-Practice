import { Link } from "react-router-dom";
import {BiAtom} from 'react-icons/bi';
import {BiMenu} from 'react-icons/bi';



const Navbar = () => {
  return ( 
    <div>
      <div> 
        {/*  Large or Medium Navbar */}
        <div className="top-0 sticky bg-white shadow-xl max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-balck p-4">
            
            <h1 className="flex items-center text-green-400 text-2xl font-bold cursor-pointer"> <BiAtom size='1.4rem'/> React</h1>
            
            <div className="space-x-8 items-center font-medium text-md hidden md:flex">
              <Link to={"/"} className=' hover:px-3 hover:py-1 hover:bg-black hover:rounded-lg hover:text-white duration-500'>Home</Link>
              <Link to="profile" className=' hover:px-3 hover:py-1 hover:bg-black hover:rounded-lg hover:text-white duration-500'>Profile</Link>
              <Link to={"/contact"} className=' hover:px-3 hover:py-1 hover:bg-black hover:rounded-lg hover:text-white duration-500'>Contact</Link>
            </div>
            
            <div className="hidden md:flex">
              <button className='bg-green-400 hover:bg-transparent border-2 hover:border-green-400 px-6 py-1.5 rounded-lg font-medium hover:opacity-80  duration-500'>Let's Start</button>
            </div>
            
            <div className='md:hidden hover:text-green-400 cursor-pointer duration-500'>
                <BiMenu size='2rem'/>
            </div>
          
          </div>
        </div>
        
         {/* Mobile Navbar */}
        <div className="">
          <div className="top-0 sticky md:hidden">
            <div className="flex flex-col items-center shadow-xl pt-6 space-y-6 pb-10">
              <Link to={"/"} className='hover:py-4 text-center w-full  hover:bg-black duration-700 hover:text-white  font-medium '>Home</Link>
              <a href="#" className='hover:py-4 text-center w-full  hover:bg-black duration-700 hover:text-white  font-medium '>Services</a>
              <a href="#" className='hover:py-4 text-center w-full  hover:bg-black duration-700 hover:text-white  font-medium '>Application</a>
              <Link to={"/about"} className='hover:py-4 text-center w-full  hover:bg-black duration-700 hover:text-white  font-medium '>About</Link>
              <a href="#" className='hover:py-4 text-center w-full  hover:bg-black duration-700 hover:text-white pb-6 font-medium '>Contact Us</a>
              <h2 className=' font-sm text-sm max-w-sm mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus neque unde praesentium nisi molestiae.</h2>
              <button className='bg-green-400 hover:bg-transparent border-2 hover:border-green-400 px-6 py-1.5 rounded-lg font-medium hover:opacity-80  duration-700 '>Let's Start</button>
            </div>
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default Navbar;