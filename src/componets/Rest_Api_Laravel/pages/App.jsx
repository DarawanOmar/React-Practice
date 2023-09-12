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
const MAX_PRICE = 10000;
const MIN_AREA = 100;
const MAX_AREA = 1000;

const App = () => {
    const [properties, setproperties] = useState([]);
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
            setproperties(prevProperties => [...prevProperties, ...data.data.properties.data]);
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

    return(
    <div id='1' className='max-w-7xl mx-auto   bg-neutral-100 font-realEstate2'>
        {/* User Name & Profile */}
        <div className=''><ProfileHeader/></div>
        {/* Category & Filter */}
        <div className='flex flex-col md:flex-row-reverse md:justify-between md:items-center p-4'>
            {/* Filter & Search */}
            <div className="flex justify-between my-4 md:space-x-6">
                <div className="flex bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50 items-center rounded-2xl mr-2 w-full">
                    <span className='text-blue-600  p-2 text-2xl'><FiSearch/></span>
                    <input value={search} onChange={(e) => handleSearch(e.target.value)} className='p-3 bg-transparent focus:outline-none w-full rounded-lg  placeholder:text-gray-400 shadow-sm' type="text" placeholder='Search City' />
                </div>
                <div>
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500  via-indigo-700  to-indigo-500 rounded-xl px-4 py-[11px] ">
                        <h1 className='bg-white rounded-full flex justify-center items-center w-5 h-5 text-blue-700'><BiFilter/></h1>
                        <h1 className='text-gray-300'><button onClick={filterButton}>Filters</button></h1>
                    </div>
                </div>
            </div>
            {search ? (<>
            <div className="bg-neutral-200 h-28 w-[230px] overflow-scroll">
                {cities.map(city => (
                    <div key={city.id}>
                        <h1 className='w-full text-center bg-gray-200 hover:bg-black border-b-2 border-black/30 p-1'>
                            <Link to={`/searchproperty/${city.id}`}> {city.name} </Link>
                        </h1>
                    </div>
                ))}
                {cities.length === 0 && <h1 className='text-center mt-8 font-bold '>City Not Found</h1>}
            </div>
            </>) :null}
            {/* categoties */}
            <div className="flex justify-between items-center  mt-6 mb-8 md:space-x-10 lg:space-x-20">
                <a href='#2'><button onClick={() => handleFilterCatigorey(4)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={category} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(1)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={apet} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(3)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={landd} alt="" /></button></a>
                <a href='#2'><button onClick={() => handleFilterCatigorey(2)} className='bg-white  flex justify-center items-center rounded-lg p-3'><img className='w-8 h-8' src={house} alt="" /></button></a>
            </div>
        </div>

          {/* Filter */}
            <div id='2' className={filter ? 'bg-neutral-200 w-full h-[500px] fixed bottom-14 rounded-t-[40px] p-4  ease-in-out duration-500 z-10' : ' translate-y-72 ease-in-out duration-500'}>
            {filter && <>
                <button className='font-bold text-lg' onClick={filterButton}>x</button>
                <h1 className='text-center text-2xl font-bold '>Filter</h1>
                <h1 className='text-xl font-bold mt-5 '>Property Type </h1>

                <div className='mt-10 '>
                        <h1 className='font-bold text-md'>Property Price</h1>
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
                <div className=" mt-16 text-center">
                    <a href='#2' className='text-center font-bold text-xl bg-gradient-to-l from-indigo-700 to-indigo-400 text-gray-200 py-2 rounded-md max-w-max px-10 mx-auto'><button onClick={() => {
                        handleFilter()
                        filterButton()
                        }}>Filter</button></a>
                </div>
            </>}
            </div>

        {/* All Property */}
        <div className="flex justify-between items-center my-3 p-4">
            <h1 className='font-bold text-xl'>All Property</h1>
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
    
        {/* Featured Property  */}
        <h1 className='font-bold text-xl my-4 mt-10 p-4'>Featured Property</h1>
        {properties && (<>
        <div id='2' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-4 scroll-mt-20 '>
            {properties.map((item, index) => {
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