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
    // console.log(user.name.length);
  return (
    <div className='max-w-7xl mx-auto'>
        <div className="flex justify-between items-center py-2 px-3  ">
            {!loader ? (
                <>
                    <h1 className='capitalize text-2xl  font-bold'>{user?.name?.length > 10 ? `${user?.name?.slice(0,16)}...` : user?.name}</h1> 
                    {user?.image ? <Link to='/profile'><img className='w-12 h-12 rounded-[10px] object-cover' src={user.photo}  alt="user" /></Link> 
                    :<Link to='/profile'><img className='w-12 h-12 rounded-full  object-cover' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"  alt="userKnown" /></Link> }
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