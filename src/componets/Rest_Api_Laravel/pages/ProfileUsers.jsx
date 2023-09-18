import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import PropertiesUser from '../components/PropertiesUser';


const ProfileUsers = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(false)
    const [propertiesUser, setPropertiesUser] = useState([])
    const [user, setUser] = useState([])   

    useEffect(()=>{
        setLoader(true)
        const fetchProperties = async () =>{
            const response = await axios.get(`http://localhost:8000/api/propertiesUser/${id}`,
            {headers: {'Accept': 'application/json','Content-Type': 'application/json'}}) 

            const user = await axios.get(`http://localhost:8000/api/users/${id}`,
            {headers: {'Accept': 'application/json','Content-Type': 'application/json'}}) 

            if(response && user){
                setPropertiesUser(response.data.properties)
                console.log(response.data.properties)
                setUser(user.data.users)
                setLoader(false)
            }else{
                setLoader(false)
            }
        }
        fetchProperties();
    },[])

   
  return (
    <div className='max-w-7xl mx-auto'>

        {/*  Heading Top Back Button*/}
        <div className="flex md:hidden justify-between items-center p-2 px-4">
            <div className="flex items-center space-x-1">
                <Link to='/users' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold'>UserProfile</h1>
            </div>
        </div>
        {/* User Email & Name */}
        {!loader ? (<>
            <div className=''>

                {/* Profile & Cover */}
                <div className="relative">
                    {user?.cover ? 
                    (<>
                        <img className='max-h-[200px] md:max-h-[350px] w-full object-cover' src={`http://localhost:8000/upload/users/${user.cover}`} alt="buling" />
                    </>) 
                    :(<>
                        <img className='max-h-[200px] w-full object-cover' src="https://img.freepik.com/free-photo/top-view-wooden-frame-with-copy-space_23-2148553336.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="buling" />
                    </>)}
                    <span className='absolute top-[50%] lg:top-[60%] left-[35%] lg:left-[43%] border-[6px] rounded-full border-white'>
                        {user?.image ? 
                        (<>
                            <img className='w-28 h-28 md:w-44 md:h-44 rounded-full object-cover' src={`http://localhost:8000/upload/users/${user.image}`}  alt="" />
                        </>) 
                        : (<>
                             <img className='w-28 h-28 rounded-full object-cover' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"  alt="userKnown" />
                        </>)}
                    </span>

                </div>
                {/* Name & Bio */}
                <h1 className='text-center mt-10 font-bold text-xl md:text-2xl md:mt-14'>{user.name}</h1>
                <div className='text-center mt-3 p-2'>
                    {user.bio ? <h1 className='md:text-xl'>{user.bio}</h1> : null}
                </div>
                <hr  className='w-1/2 mx-auto bg-black my-4'/>
            </div>
        </>) : 
        <>
            <div className=''>
                <div className="bg-gray-300 h-44 w-full animate-pulse relative">
                    <div className="absolute bg-gray-400 border-[8px] border-white w-32 h-32 rounded-full top-[50%] left-[35%] md:left-[50%]"></div>
                </div>
            </div>
        </>}

        {/* Properties */}
        <h1 className='font-bold text-xl my-4 mt-10 ml-2 '>Properties</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 p-4'>
            {propertiesUser?.map(task => {
                return <PropertiesUser key={task.id} {...task}/>
            })}
        </div>

    </div>
  )
}

export default ProfileUsers