import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'
import axios2  from 'axios'
import { MdOutlinePlaylistAdd } from 'react-icons/md'


const PropertyEdit = () => {
  const{id} = useParams();
  const [cities, setCities] = useState([])
  const [Catigorey, setCatigorey] = useState([])
  const [showAddRoom, setShowAddRoom] = useState(false)
  const navigate = useNavigate();
  const [title, settitle] = useState('')
  const [disc, setdisc] = useState('')
  const [price, setprice] = useState('')
  const [area, setarea] = useState('')
  const [address, setaddress] = useState('')
  const [city, setcity] = useState('')
  const [catigore, setCatigore] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [kitchen, setKitchen] = useState('')
  const [garage, setGarage] = useState('')


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
        setcity(fetchPro?.city)
        setCatigore(fetchPro?.catigorey)
        setCatigorey(responseCatigoery.data)
        setCities(responseCities.data)
        setBedroom(fetchPro?.bedroom)
        setBathroom(fetchPro?.bathroom)
        setGarage(fetchPro?.kitchen)
        setKitchen(fetchPro?.garage)
      }else {
        console.log("No Response!");
      }     
    }
    fetchProerty()
  },[])

  const submitForm = async (e) => {
    e.preventDefault();
    const update = await axios2.put(`http://localhost:8000/api/profile/updateproperties/${id}`,{ city_id:city.id , catigorey_id:catigore.id, title:title, address:address ,area:area ,price:price, description:disc },{headers: {
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
    <div className=" ">
      {/* Top Text */}
      <div className="flex items-center pb-6 p-2">
          <Link to='/profile' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
          <h1 className='text-xl font-bold mb-1 '><Link to='/profile'> Own Profile</Link></h1>
      </div>
    <div className=" bg-neutral-100 rounded-t-3xl w-full px-6 pt-6">
      <form onSubmit={submitForm}>
            {/*  Title*/}
            <h1 className='text-center font-bold'>Title</h1>
            <input  onChange={(e) => settitle(e.target.value)} value={title} type="text" className='p-2 text-center  w-full rounded-xl  mb-2 focus:outline-none ' placeholder='Title' />

            {/* Discripton */}
            <h1 className='text-center'>title</h1>
            <textarea value={disc} onChange={(e) => setdisc(e.target.value)} cols="30" rows="2"  className='p-2 text-center  w-full rounded-xl focus:outline-none ' placeholder='Discription' />

            {/* Area & Price */}
            <div className='flex items-center space-x-2'>
                {/* Price */}
                    <div className='flex flex-col items-center'>
                      <h1 className='text-center font-bold'>Discription</h1>
                      <input value={price} onChange={(e) => setprice(e.target.value)}  type="number" className='p-3 w-full  text-center focus:outline-none  rounded-xl  ' placeholder='Price' />
                    </div>
                {/*  Area*/}
                
                    <div className='flex flex-col items-center'>
                      <h1 className='text-center font-bold'>Area</h1>
                      <input value={area}  onChange={(e) => setarea(e.target.value)} type="number" className='p-3 w-full text-center  focus:outline-none  rounded-xl  ' placeholder='Area' /></div>
                    </div>

            {/* City & Categorey */}
            <div className="flex justify-between items-center space-x-[1px] rounded-2xl p-2">
            <div className='flex flex-col items-center'>
            <h1 className='text-center font-bold'>Catigorey</h1>
                <select name="a"  id="dd" value={catigore.id}  onChange={(e) => setCatigore(e.target.value)} className='focus:outline-none p-2 rounded-md'>
                    <option>{catigore.name}</option>
                    {Catigorey.map(catigorey => {
                        return <option key={catigorey.id} value={catigorey.id}>{catigorey.name}</option>
                    })}
                </select>
                </div>
                <div className='flex flex-col items-center'>
            <h1 className='text-center font-bold'>City</h1>
                <select name="d"  id="aaa"  value={city.id} onChange={(e) => setcity(e.target.value)} className='focus:outline-none p-2 rounded-md'>
                    <option>{city.name}</option>
                    {cities.map(city => {
                        return <option key={city.id} value={city.id}>{city.name}</option>
                    })}
                </select>
                </div>
               
            </div>
            
            {/*  Beth Bath Kitchen Garage*/}
            <div className="flex justify-between items-center mt-2">
                <h1 className='font-bold'>Rooms (Optional)</h1>
                <span className='text-2xl ' onClick={()=>setShowAddRoom(prev => !prev)}><MdOutlinePlaylistAdd/></span>
            </div>
            <div className={showAddRoom ? " flex justify-between items-center space-x-2 duration-700 ease-in-out" : "-translate-x-[1000px] duration-700 ease-in-out"}>
                {showAddRoom && (<>
                    <div className="flex flex-col items-center">
                      <h1 className='text-center font-bold'>Bedroom</h1>
                      <input value={bedroom} onChange={(e)=>setBedroom(e.target.value)} type="number" className='text-center focus:outline-none rounded-md py-2 w-full  placeholder:text-center' placeholder='Bed' />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className='text-center font-bold'>Bedroom</h1>
                      <input value={bathroom} onChange={(e)=>setBathroom(e.target.value)} type="number" className='text-center focus:outline-none rounded-md py-2 w-full  placeholder:text-center' placeholder='Bath' />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className='text-center font-bold'>Kitchen</h1>
                      <input value={kitchen} onChange={(e)=>setKitchen(e.target.value)} type="number" className='text-center focus:outline-none rounded-md py-2 w-full  placeholder:text-center' placeholder='Kitchen' />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className='text-center font-bold'>Garage</h1>
                      <input value={garage} onChange={(e)=>setGarage(e.target.value)} type="number" className=' text-center focus:outline-none rounded-md py-2 w-full  placeholder:text-center' placeholder='Garage' />
                    </div>
                </>)}
            </div>


            {/* Address */}
            <h1 className='text-center font-bold'>Address</h1>

            <input value={address} onChange={(e) => setaddress(e.target.value)}  type="text" className='p-2 rounded-xl  w-full focus:outline-none' placeholder='Address' />

            <div className='text-center mt-3 pb-[70px]'>
                <button onClick={submitForm} className='bg-indigo-600 text-white py-4 px-20 rounded-xl'>Update Property</button>
            </div>

        </form>
        </div>
        
</div>
 
  )
}

export default PropertyEdit