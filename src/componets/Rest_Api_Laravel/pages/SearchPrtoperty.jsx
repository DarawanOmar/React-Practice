import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoIosArrowBack } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { BiFilter } from 'react-icons/bi'
import PropertiesPage from '../components/PropertiesPage'

const SearchPrtoperty = () => {
  const {city_id} = useParams()
  const [properties, setProperties] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const fetchData = async () => {
      const resopnse = await axios.get(`http://localhost:8000/api/properties?city_id=${city_id}`,{headers:{"Accept": "application/json"}})
      if (resopnse) {
        setProperties(resopnse.data?.properties.data)
      }else{
        console.log("Error");
      }
    }
    fetchData();
  },[])

  const searach =  (name) => {
    const filterCity = properties.filter(pro => { 
      return  pro.catigorey.name.includes(name)
    })
    setProperties(filterCity) 

}

const handleSearch = (name) => {
    searach(name)
    setSearch(name)
}


  return (
    <div className='bg-neutral-100 h-screen'>
      <div className="flex justify-between items-center p-2 px-4">
        <div className="flex items-center space-x-3">
            <Link to='/properties' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
            <h1 className='text-lg font-bold mb-1 '>Properties Of {properties[1]?.city.name} City </h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-between my-4 md:space-x-6 px-4">
          <div className="flex bg-white items-center rounded-2xl mr-2">
              <span className='text-blue-600  p-2 text-2xl'><FiSearch/></span>
              <input value={search} onChange={(e) => handleSearch(e.target.value)} className='p-3 bg-white focus:outline-none  rounded-lg  placeholder:text-gray-400 shadow-sm' type="text" placeholder='Search...' />
          </div>
          <div>
              <div className="flex items-center space-x-2 bg-blue-700 rounded-xl px-4 py-[11px] ">
                  <h1 className='bg-gray-400 rounded-full flex justify-center items-center w-5 h-5 text-blue-700'><BiFilter/></h1>
                  <h1 className='text-gray-300'>Filters</h1>
              </div>
          </div>
      </div>

      {/* Propserties */}
      <h1 className='text-xl font-bold ml-4 mb-6'>All Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8">
        {properties.map(property => {
          return <PropertiesPage key={property.id} {...property} />
        })}
      </div>
    </div>
  )
}

export default SearchPrtoperty