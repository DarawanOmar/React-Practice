import React from 'react';
import { useEffect } from 'react';
import axios from '../api/axios';
import { useState } from 'react';
import List from '../components/List';
import {GoTriangleRight} from 'react-icons/go'
import {BiFilter} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import house from '../img/house.png'
import category from '../img/menu.png'
import apet from '../img/apart.png'
import landd from '../img/Land-128x128.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import PropertySliderList from '../components/PropertySliderList';
import ProfileHeader from '../components/ProfileHeader';
import useWindoSize from '../utils/useWindoSize';
import RangeSliderArea from '../components/RangeSliderArea';
import RangeSliderPrice from '../components/RangeSliderPrice';


const MIN_PRICE = 1000;
const MAX_PRICE = 100000;
const MIN_AREA = 100;
const MAX_AREA = 10000;

const App = () => {
    const [properties, setproperties] = useState([]);
    const [propertiesPriceDesc, setpropertiesPriceDesc] = useState([]);
    const [loader, setLoader] = useState(true)
    const [filter, setFilter] = useState(false)
    const {width} = useWindoSize();
    const [page, setPage] = useState(1);
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('');
    const [valuesPrice, setValuesPrice] = useState([MIN_PRICE, MAX_PRICE]);
    const [valuesArea, setValuesArea] = useState([MIN_AREA, MAX_AREA]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await axios.get(`/properties?page=${page}`);
            const propertiesPriceDesc = await axios.get(`/sortprice?page=${page}`);
            setproperties(prevProperties => [...prevProperties, ...data.data.properties.data]);
            setpropertiesPriceDesc(prevProperties => [...prevProperties, ...propertiesPriceDesc.data.data.data])
        }
        fetchData();
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    },[page])

    const searachInput = async (name) => {
        const city = await axios.get('/cities');
        const filterCity = city.data.filter(city =>{
            return  name && city && city.name.toLowerCase().includes(name.toLowerCase())
        })
        setCities(filterCity)
    }

    const handleSearch = (name) => {
        searachInput(name)
        setSearch(name)
    }
    const handleFilter = async () => {
        const response = await axios.get(`http://localhost:8000/api/properties?area[0]=${valuesArea[0]}&area[1]=${valuesArea[1]}&price[0]=${valuesPrice[0]}&price[1]=${valuesPrice[1]}`)
        setproperties(response.data.properties.data)
    }

    const handleFilterCatigorey = async (id) => {
        const response = await axios.get(`http://localhost:8000/api/properties?catigorey_id=${id}`)
        setproperties(response.data.properties.data)
    }
    const filterButton = () => {
        setFilter(prev => !prev)
    }

    const seeMore = () => {
        setPage(page + 1)
      }

    return (
    <div id='1' className='max-w-7xl mx-auto   bg-neutral-100 font-realEstate2'>
        {/* User Name & Profile */}
        <div className=''><ProfileHeader/></div>
        {/* Category & Filter */}
        <div className='flex flex-col md:flex-row-reverse md:justify-between md:items-center p-4 relative'>
            {/* Filter & Search */}
            <div className="flex justify-between my-4 md:space-x-6">
                <div className="flex bg-white items-center rounded-2xl mr-2 w-full">
                    <span className='text-blue-600  p-2 text-2xl'><FiSearch/></span>
                    <input value={search} onChange={(e) => handleSearch(e.target.value)} className='p-3 bg-transparent focus:outline-none w-full rounded-lg  placeholder:text-gray-400 shadow-sm' type="text" placeholder='Search City' />
                </div>
                <div>
                    <div className="flex items-center space-x-2 bg-blue-700  rounded-xl px-4 py-[11px] ">
                        <h1 className='bg-white rounded-full flex justify-center items-center w-5 h-5 text-blue-700'><BiFilter/></h1>
                        <h1 className='text-white'><button onClick={filterButton}>Filters</button></h1>
                    </div>
                </div>
            </div>
            {search ? (<>
            <div className="absolute mt-2 w-[233px] md:w-1/3 mx-auto border border-t-0 rounded-b-md shadow-lg z-10 top-[65px]">
                {cities.map(city => (
                    <div key={city.id}>
                        <h1 className='w-full text-center bg-white  rounded-b-xl p-2'>
                            <Link to={`/searchproperty/${city.id}`}> {city.name} </Link>
                        </h1>
                    </div>
                ))}
                <div className='bg-white'>{cities.length === 0 && <h1 className='text-center  '>City Not Found</h1>}</div>
            </div>
            </>) :null}
            {/* categoties */}
            <div className="flex justify-between items-center  mt-6 mb-8 md:space-x-10 lg:space-x-20">
                <a href='#2'><button onClick={() => handleFilterCatigorey(3)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={category} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(1)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={apet} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(2)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={landd} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(4)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={house} alt="" /></button></a>
            </div>
        </div>

          {/* Filter */}
            <div id='2' className={filter ? 'bg-neutral-200 w-full h-[500px] fixed bottom-14 rounded-t-[40px] p-4  ease-in-out duration-500 z-10' : ' translate-y-72 ease-in-out duration-500'}>
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
                <div className="  mt-16 flex justify-between items-center">
                <button onClick={()=>{
                     setValuesPrice([MIN_PRICE, MAX_PRICE]);
                     setValuesArea([MIN_AREA, MAX_AREA]);
                  }} className='text-center text-white  text-lg bg-blue-700  py-[5px] rounded-md px-6'>Reset</button>

                    <a href='#2' className='text-center  text-lg bg-blue-700 text-white py-[5px] rounded-md px-6 '><button onClick={() => {
                        handleFilter()
                        filterButton()
                        }}>Filter</button></a>
                </div>
            </>}
            </div>

        {/* Newest Property */}
        <div className="flex justify-between items-center my-3 p-4">
            <h1 className='font-bold text-lg'>Newest Property</h1>
            <div className='flex  text-green-500 space-x-1 '>
                <Link to='/properties'>See All</Link>
                <span className='mt-[5px]'><GoTriangleRight/></span>
            </div>
        </div>
        {/* Image slider */}
        <div className='bg-neutral-100'>
        <Swiper slidesPerView={width > 1024 ? 3.7 :  width > 770 ? 2.5 : width > 735 ? 2 :width > 600 ? 1.8 : 1.2 } >
        {properties.map((item, index) => {
            return (
                <SwiperSlide key={index} className=''>
                    <h1 className='mx-2 bg-neutral-100'>
                        <PropertySliderList {...item} loader={loader}/>
                    </h1>
                </SwiperSlide>
            );
            })}

        </Swiper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8"></div>
    
        {/* Expensive Property  */}
        <h1 className='font-bold text-lg mt-10 px-4'>Expensive Property</h1>
        {properties && (<>
        <div id='2' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-4 scroll-mt-20 '>
            {propertiesPriceDesc.map((item, index) => {
                return (
                    <List key={index} {...item} loader={loader}/>
                );
            })}
        </div>
        </>)}
        <div className="text-center pb-10">
          {properties.length < 100 && (
            <button onClick={seeMore } className='btn-action mb-10'>See More</button>
          )}
        </div>
    </div>
  )
}

export default App