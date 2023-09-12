import React from 'react'

import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Tests from '../pages/Tests'
import { useState } from 'react'
import { useEffect } from 'react'


const ListUser = ({ id, name, email, image ,photo}) => {
    const[loader,setLoader] = useState(true)
    
    useEffect(()=>{ setTimeout(() => {
        setLoader(false)
    }, 1500);},[])
    if(loader){
        return <Tests/>
    }

  return (
    <div className="flex justify-between bg-white rounded-2xl p-2">
        <div className="">
            {image ?
                <img className='w-16 h-16 rounded-[10px] object-cover' src={`http://localhost:8000/upload/users/${image}`}  alt="" />
            :
                <img className='w-16 h-16 rounded-[10px] ' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"  alt="" />
            }
        </div>
        <div className="">
            <h1 className='font-bold'>{ name}</h1>
            <h1>{email.length > 10 ? email.slice(0,20) : email}</h1>
        </div>
        <div className="mt-5">
            <Link to={`/profileuser/${id}`}><span className='text-xl pr-2'><SlArrowRight/></span></Link>
        </div>
    </div>
  )
}

export default ListUser