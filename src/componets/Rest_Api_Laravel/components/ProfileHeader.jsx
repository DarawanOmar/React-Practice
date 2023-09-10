import React, { useEffect, useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProfileHeader = () => {
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
    const fetchuser = async () => {
        setLoader(true)
        const data = await axios.get('http://localhost:8000/api/profile', {headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        setUser(data.data)
        setLoader(false)
    }
    fetchuser()
    },[])

  return (
    <div className='max-w-7xl mx-auto'>
        <div className="flex justify-between items-center py-2 px-3  ">
            {!loader ? (
                <>
                    <h1 className='capitalize text-2xl  font-bold'>{user?.name}</h1>
                    <Link to='/profile'><img className='w-12 h-12 rounded-[10px] ' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph"  alt="" /></Link>
                </>
            ):(
                <>
                    <Link to='/login' className='animate-pulse bg-gray-300 h-6 rounded-md w-32'></Link>
                    <Link to='/login' className='animate-pulse bg-gray-200 text-gray-500 rounded-full text-xl w-11 h-11 flex justify-center items-center'><FaUserAlt/></Link>
                </>
            )}
            </div>
    </div>
  )
}

export default ProfileHeader