import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ListPropritesFavoraite from '../components/ListPropritesFavoraite'
import Lottie from 'lottie-react'
import sad from '../components/sademoji.json'

const FavoraiteProperties = () => {
  const [propertiesFavoraite, setPropertiesFavoraite] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:8000/api/propertyfavoraite2`,{headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }})
      if(response){
        setPropertiesFavoraite(response.data.data)
      }else{
        console.log("No Data Back");
      }
    }
    fetchData()
  },[])

  
  return (
    <div>
      {/* Top Text & Button Back */}
       <div className="flex justify-between items-center p-2 px-4">
            <div className="flex items-center space-x-2">
                <Link to='/home' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold '><Link to='/home'>Favoraite Properties </Link></h1>
            </div>
        </div>

       {propertiesFavoraite.length > 0 &&  <h1 className='text-center mt-4 font-bold text-xl my-3'>This is Your Favoraite Properties....</h1>}

      {/* List Properties */}
      <div className="p-4 mb-10">
        {propertiesFavoraite.length > 0 ? (<>
        {propertiesFavoraite.map((pro,index) => {
          return  <ListPropritesFavoraite key={index} id={pro.id} property={JSON.parse(pro.property)[0]}/>
        })}</>):
        (<>
          <div className='flex justify-center items-center h-screen'>
            <h1 className='text-center font-bold'>You Don't Have Favoraite Property Yet</h1>
            <span className='h-10 w-10'>
              <Lottie animationData={sad} loop={true}/>
            </span>
          </div>
        </>)}
      </div>

    </div>
  )
}

export default FavoraiteProperties