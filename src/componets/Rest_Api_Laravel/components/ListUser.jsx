import React from 'react'

import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Tests from '../pages/Tests'
import { useState } from 'react'
import { useEffect } from 'react'


const ListUser = ({id,name,email}) => {
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
            <img className='w-16 h-16 rounded-[10px] ' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph"  alt="" />
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