import { Link } from "react-router-dom";
import {BiAtom} from 'react-icons/bi';


const NavbarCustomHook = () => {
    return ( 
        <div>
            <div className="top-0 sticky font-serif bg-white shadow-xl max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-balck p-4">
            
            <h1 className="flex items-center text-green-400 text-2xl font-bold cursor-pointer"> <BiAtom size='1.4rem'/> React</h1>
            
            <div className="space-x-8 items-center font-medium text-md hidden md:flex">
              <Link to="showAndHide" className=' hover:px-3 hover:py-1 hover:bg-black hover:rounded-lg hover:text-white duration-500'>Show And Hide</Link>
              <Link to="fetchData" className=' hover:px-3 hover:py-1 hover:bg-black hover:rounded-lg hover:text-white duration-500'>Ftech Data</Link>
            </div>
            
            <div className="hidden md:flex">
              <button className='bg-green-400 hover:bg-transparent border-2 hover:border-green-400 px-6 py-1.5 rounded-lg font-medium hover:opacity-80  duration-500'>Let's Start</button>
            </div>
          
          </div>
        </div>
        </div>
     );
}
 
export default NavbarCustomHook;