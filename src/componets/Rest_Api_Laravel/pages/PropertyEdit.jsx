import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'
import axios2  from 'axios'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import { useSelector } from 'react-redux'


const PropertyEdit = () => {
  const{id} = useParams();

  // const [showAddImage, setShowAddImage] = useState(false)
  const [cities, setCities] = useState([])
  const [Catigorey, setCatigorey] = useState([])
  const [showAddRoom, setShowAddRoom] = useState(false)
  const [showAddCityAndCatigorey, setShowAddCityAndCatigorey] = useState(false)
  const [showAddAreaAndPrice, setShowAddAreaAndPrice] = useState(false)
  const navigate = useNavigate();
  const [title, settitle] = useState('')
  const [disc, setdisc] = useState('')
  const [price, setprice] = useState('')
  const [area, setarea] = useState('')
  const [address, setaddress] = useState('')
  const [city, setcity] = useState('')
  const [cityShow, setCityShow] = useState('')
  const [catigore, setCatigore] = useState('')
  const [catigoreShow, setCatigoreShow] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [kitchen, setKitchen] = useState('')
  const [garage, setGarage] = useState('')
  const [image, setImage] = useState(null);
  const{isDark} = useSelector((state) => state.dark)


  useEffect(()=>{
    const fetchProerty = async () => {
      const responseCatigoery = await axios.get('http://localhost:8000/api/catigories',{headers : {"Accept" : 'application/json','Content-Type' : "application/json"}})
      const responseCities = await axios.get('http://localhost:8000/api/cities',{headers : {"Accept" : 'application/json','Content-Type' : "application/json"}})
      const responseProperty = await axios.get(`properties/${id}`)

      if(responseCatigoery && responseCities && responseProperty){
        const fetchPro = responseProperty.data.property;
        settitle(fetchPro?.title);
        setdisc(fetchPro?.description);
        setprice(fetchPro?.price);
        setarea(fetchPro?.area);
        setaddress(fetchPro?.address)
        setcity(fetchPro?.city_id)
        setCatigore(fetchPro?.catigorey_id)
        setCatigorey(responseCatigoery.data)
        setCities(responseCities.data)
        setCityShow(fetchPro?.city)
        setCatigoreShow(fetchPro?.catigorey)
        setBedroom(fetchPro?.bedroom || '');
        setBathroom(fetchPro?.bathroom || '');
        setGarage(fetchPro?.kitchen || '');
        setKitchen(fetchPro?.garage || '');
        
      }else {
        console.log("No Response!");
      }     
    }
    fetchProerty()
  },[])
//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
// };
// const formData = new FormData();
// formData.append('image', image);
  const submitForm = async (e) => {
    e.preventDefault();
    const update = await axios2.put(`http://localhost:8000/api/profile/updateproperties/${id}`,
    { city_id:city , catigorey_id:catigore, title:title, address:address ,area:area ,price:price, description:disc, bedroom:bedroom, bathroom:bathroom, garage:garage, kitchen:kitchen  },
    {headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }});
    
    if(update){
      navigate('/profile')
      console.log("Data Upadte SuccessFully");
    }else{
      console.log(update.response.data.Errors[0]);
    }
  }


  return (
    <div className={isDark ? " bg-black text-white duration-500 min-h-screen" : "bg-neutral-100 text-black duration-500 min-h-screen"}>
      <div className="max-w-7xl mx-auto ">
        {/* Top Text */}
        <div className="flex items-center  p-2">
            <Link to='/profile' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
            <h1 className='text-xl font-bold'><Link to='/profile'> Own Profile</Link></h1>
        </div>
      <div className={` ${isDark ? " bg-black text-white duration-500 min-h-screen" : "bg-neutral-100 text-black duration-500"} rounded-t-3xl w-full px-6 pt-3`}>
        <h1 className='text-center font-bold text-xl text-indigo-500 mb-5'>Edit Property</h1>
        <form onSubmit={submitForm}>
              {/*  Title*/}
              <h1 className='text-center font-bold'>Title</h1>
              <input  onChange={(e) => settitle(e.target.value)} value={title} type="text" className='p-2 text-center  w-full rounded-xl  mb-2 focus:outline-none text-black ' placeholder='Title' />
              {/* Discripton */}
              <h1 className='text-center font-bold'>Discription</h1>
              <textarea value={disc} onChange={(e) => setdisc(e.target.value)} cols="30" rows="2"  className='p-2 text-center  w-full rounded-xl focus:outline-none text-black ' placeholder='Discription' />
              {/* Area & Price */}
              <div className="flex justify-between items-center mt-2">
                  <h1 className='font-bold'>Area & Price (Optional)</h1>
                  <span className='text-2xl ' onClick={()=>setShowAddAreaAndPrice(prev => !prev)}><MdOutlinePlaylistAdd/></span>
              </div>
              <div  className={showAddAreaAndPrice ? " flex justify-between items-center space-x-2 duration-700 ease-in-out" : "-translate-x-[1000px] duration-700 ease-in-out"}>
                 {showAddAreaAndPrice && <>
                {/* Price */}
                  <div className='flex flex-col items-center'>
                    <h1 className='text-center font-bold'>Price</h1>
                    <input value={price} onChange={(e) => setprice(e.target.value)}  type="number" className='p-3 w-full  text-center focus:outline-none text-black  rounded-xl  ' placeholder='Price' />
                  </div>
                  {/*  Area*/}
                  <div className='flex flex-col items-center'>
                    <h1 className='text-center font-bold'>Area</h1>
                    <input value={area}  onChange={(e) => setarea(e.target.value)} type="number" className='p-3 w-full text-center  focus:outline-none text-black  rounded-xl  ' placeholder='Area' />
                  </div>
                  </>}
              </div>
              {/* City & Categorey */}
              <div className="flex justify-between items-center mt-2">
                  <h1 className='font-bold'>City & Catigorey (Optional)</h1>
                  <span className='text-2xl ' onClick={()=>setShowAddCityAndCatigorey(prev => !prev)}><MdOutlinePlaylistAdd/></span>
              </div>
              <div className={showAddCityAndCatigorey ? " flex justify-between items-center space-x-2 duration-700 ease-in-out" : "-translate-x-[1000px] duration-700 ease-in-out"}>
              {showAddCityAndCatigorey && <>
                <div className='flex flex-col items-center '>
                  <h1 className='text-center font-bold'>Catigorey</h1>
                  <select
                    onChange={(e) => setCatigore(e.target.value)}
                    className='focus:outline-none text-black p-2 rounded-md'>
                      <option value={catigore}>{catigoreShow?.name}</option>
                      {Catigorey.map(catigorey => {
                          return <option key={catigorey.id} value={catigorey.id}>{catigorey.name}</option>
                      })}
                  </select>
                </div>
                <div className='flex flex-col items-center'>
                  <h1 className='text-center font-bold'>City</h1>
                  <select
                  onChange={(e) => setcity(e.target.value)}
                    className='focus:outline-none text-black p-2 rounded-md '>
                      <option value={city}>{cityShow?.name}</option>
                      {cities.map(city => {
                          return <option key={city.id} value={city.id}>{city.name}</option>
                      })}
                  </select>
                </div>
                </>}
              </div>
      
              {/*  Beth Bath Kitchen Garage*/}
              <div className="flex justify-between items-center mt-2">
                  <h1 className='font-bold'>Rooms (Optional)</h1>
                  <span className='text-2xl ' onClick={()=>setShowAddRoom(prev => !prev)}><MdOutlinePlaylistAdd/></span>
              </div>
              <div className={showAddRoom ? " flex justify-between items-center space-x-2 duration-700 ease-in-out" : "-translate-x-[1000px] duration-700 ease-in-out"}>
                  {showAddRoom ? (<>
                      <div className="flex flex-col items-center">
                        <h1 className='text-center font-bold'>Bedroom</h1>
                        <input value={bedroom} onChange={(e)=>setBedroom(e.target.value)} type="number" className='text-center focus:outline-none text-black rounded-md py-2 w-full  placeholder:text-center' placeholder='Bed' />
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className='text-center font-bold'>Bathroom</h1>
                        <input value={bathroom} onChange={(e)=>setBathroom(e.target.value)} type="number" className='text-center focus:outline-none text-black rounded-md py-2 w-full  placeholder:text-center' placeholder='Bath' />
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className='text-center font-bold'>Kitchen</h1>
                        <input value={kitchen} onChange={(e)=>setKitchen(e.target.value)} type="number" className='text-center focus:outline-none text-black rounded-md py-2 w-full  placeholder:text-center' placeholder='Kitchen' />
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className='text-center font-bold'>Garage</h1>
                        <input value={garage} onChange={(e)=>setGarage(e.target.value)} type="number" className=' text-center focus:outline-none text-black rounded-md py-2 w-full  placeholder:text-center' placeholder='Garage' />
                      </div>
                  </>) : null}
              </div>
              {/*  Add Photo*/}
              {/* <div className="flex justify-between items-center mt-2">
                  <h1 className='font-bold'>Photo</h1>
                  <span className='text-2xl ' onClick={()=>setShowAddImage(prev => !prev)}><MdOutlinePlaylistAdd/></span>
              </div>
              <div className={showAddImage ? " flex justify-between items-center space-x-2 duration-700 ease-in-out" : "-translate-x-[1000px] duration-700 ease-in-out"}>
                  {showAddImage ? (<>
                      <div className="flex justify-center items-center  bg-gray-200">
                        <input onChange={handleImageChange} type="file" className=' text-center focus:outline-none text-black rounded-md py-2 w-full' />
                      </div>
                  </>) : null}
              </div> */}
              {/* Address */}
              <h1 className='text-center font-bold'>Address</h1>
              <input value={address} onChange={(e) => setaddress(e.target.value)}  type="text" className='p-2 text-center rounded-xl  w-full focus:outline-none text-black' placeholder='Address' />
              <div className='text-center mt-3 pb-[70px]'>
                  <button onClick={submitForm} className='bg-indigo-600 text-white py-4 px-20 rounded-xl'>Update Property</button>
              </div>
          </form>
          </div>
          
      </div>
    </div>
 
  )
}

export default PropertyEdit