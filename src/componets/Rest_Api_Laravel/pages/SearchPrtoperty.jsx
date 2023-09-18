import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoIosArrowBack } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { BiFilter } from 'react-icons/bi'
import PropertiesPage from '../components/PropertiesPage'
import RangeSliderPrice from '../components/RangeSliderPrice'
import RangeSliderArea from '../components/RangeSliderArea'

let MIN_PRICE = 1000;
let MAX_PRICE = 10000;
let MIN_AREA = 100;
let MAX_AREA = 1000;

const SearchPrtoperty = () => {
  const {city_id} = useParams();
  const [properties, setProperties] = useState([])
  const [displayProperties, setPisplayProperties] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(false)
  const [valuesPrice, setValuesPrice] = useState([MIN_PRICE, MAX_PRICE]);
  const [valuesArea, setValuesArea] = useState([MIN_AREA, MAX_AREA]);

  useEffect(()=>{
    const fetchData = async () => {
      const resopnse = await axios.get(`http://localhost:8000/api/properties?city_id=${city_id}`,{headers:{"Accept": "application/json"}})
      if (resopnse.data.properties.data) {
        setProperties(resopnse.data?.properties.data)
        setPisplayProperties(resopnse.data?.properties.data)
      }else{
        console.log("Error");
      }
    }
    fetchData();
  },[])

  const handleFilter = async () => {
    const resopnse = await axios.get(`http://localhost:8000/api/properties?city_id=${city_id}&area[0]=${valuesArea[0]}&area[1]=${valuesArea[1]}&price[0]=${valuesPrice[0]}&price[1]=${valuesPrice[1]}`,{headers:{"Accept": "application/json"}})
    setPisplayProperties(resopnse.data.properties.data)
}

  // Input Search
  const searchProperty =  (name) => {
    const filterCity = properties.filter(pro => { 
      return  pro.catigorey.name.toLowerCase().includes(name.toLowerCase()) || pro.title.toLowerCase().includes(name.toLowerCase())
    })
    setPisplayProperties(filterCity) 

}

const handleSearch = (name) => {
  if(name){
    searchProperty(name)
  }else{
    setPisplayProperties(properties)
  }
  setSearch(name)
}

const filterButton = () => {
  setFilter(prev => !prev)
}


  return (
    <div className='bg-neutral-100 max-w-7xl mx-auto h-full'>
      <div className="flex justify-between items-center p-2 px-4 ">
        <div className="flex items-center space-x-3">
            <Link to='/properties' className='md:hidden text-xl text-indigo-500'><IoIosArrowBack/></Link>
            <h1 className='text-lg font-bold mb-1 '>Properties Of <span className=' text-indigo-500'>{properties[1]?.city.name}</span> City </h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-between my-4 md:space-x-6 px-4 mt-10">
          <div className="flex bg-white items-center rounded-2xl mr-2">
              <span className='text-blue-600  p-2 text-2xl'><FiSearch/></span>
              <input value={search} onChange={(e) => handleSearch(e.target.value)} className='p-3 bg-white focus:outline-none  rounded-lg  placeholder:text-gray-400 shadow-sm' type="text" placeholder='Catigorey || Title' />
          </div>
          <div>
              <div className="flex items-center space-x-2 bg-blue-700 rounded-xl px-4 py-[11px] ">
                  <h1 className='bg-white rounded-full flex justify-center items-center w-5 h-5 text-blue-700'><BiFilter/></h1>
                  <button onClick={filterButton} className='text-white md:text-xl'>Filters</button>
              </div>
          </div>
      </div>

      <div className={filter ? 'bg-neutral-100 w-full h-[500px] fixed md:static bottom-[54px] rounded-t-[40px] p-4  ease-in-out duration-500 z-10' : ' translate-y-72 ease-in-out duration-500'}>
            {filter && <>
              <button className='font-bold text-lg' onClick={filterButton}>x</button>
                <h1 className='text-center text-2xl font-bold '>Filter</h1>
                <h1 className='text-xl font-bold mt-5 '>Property Type </h1>

                <div className='mt-10 '>
                <div className='flex justify-between items-center '>
                        <h1 className='font-bold text-md'>Property Price</h1>
                    </div>
                    <div className='flex justify-between items-center '>
                        <h1 className='text-gray-400 text-sm'>Low</h1>
                        <h1 className='text-gray-400 text-sm mr-4'>High</h1>
                    </div>
                    <RangeSliderPrice valuesPrice={valuesPrice} setValuesPrice={setValuesPrice} MIN_PRICE= {MIN_PRICE} MAX_PRICE = {MAX_PRICE} />
                </div>
                <div className='mt-16'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-bold text-md'>Property Area</h1>
                    </div>
                    <div className='flex justify-between items-center '>
                        <h1 className='text-gray-400 text-sm'>Low</h1>
                        <h1 className='text-gray-400 text-sm mr-4'>High</h1>
                    </div>
                    <RangeSliderArea valuesArea={valuesArea} setValuesArea={setValuesArea} MIN_AREA= {MIN_AREA} MAX_AREA = {MAX_AREA} />
                </div>
                <div className=" mt-16 flex justify-between items-center">
                  <button onClick={()=>{
                     setValuesPrice([MIN_PRICE, MAX_PRICE]);
                     setValuesArea([MIN_AREA, MAX_AREA]);
                  }} className='text-center text-white  text-lg bg-blue-700  py-[5px] rounded-md px-6'>Reset</button>
                    <a href='#2' className='text-center text-white  text-lg bg-blue-700  py-[5px] rounded-md px-6 '><button onClick={() => {
                        handleFilter()
                        filterButton()
                        }}>Filter</button></a>
                </div>
            </>}
            </div>

      {/* Propserties */}
      <h1 className='text-xl font-bold ml-4 mb-6'>All Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20">
        {displayProperties.map(property => {
          return <PropertiesPage key={property.id} {...property} />
        })}
      </div>
    </div>
  )
}

export default SearchPrtoperty