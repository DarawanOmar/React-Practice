import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import PropertiesUser from '../components/PropertiesUser';
import Tests from './Tests';

const ProfileUsers = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(false)
    const [propertiesUser, setPropertiesUser] = useState([])
    const [user, setUser] = useState([])
    useEffect(()=>{
        setLoader(true)
        const fetchProperties = async () =>{
            const response = await axios.get('http://localhost:8000/api/properties',id,
            {headers: {'Accept': 'application/json','Content-Type': 'application/json'}}) 

            const user = await axios.get(`http://localhost:8000/api/users/${id}`,
            {headers: {'Accept': 'application/json','Content-Type': 'application/json'}}) 

            if(response && user){
                setPropertiesUser(response.data.properties.data)
                setUser(user.data.users)
                setLoader(false)
            }else{
                setLoader(false)
            }
        }
        fetchProperties();
    },[])
   
  return (
    <div>

        {/*  Heading Top Back Button*/}
        <div className="flex justify-between items-center p-2 px-4">
            <div className="flex items-center space-x-3">
                <Link to='/users' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold mb-1 '>UserProfile</h1>
            </div>
        </div>

        {/* Profile Use */}
        {!loader ? (<>
        
        <div className="flex p-4 ">
            <img className='w-14 h-14 rounded-[10px] ' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph"  alt="" />
            <div className="">
                <h1 className='font-bold text-lg ml-2'>{user.name}</h1>
                <h1 className='ml-2'>{user.email}</h1>
            </div>
        </div>
        </>) : <Tests/>}

        {/* Properties */}
        <h1 className='font-bold text-xl my-4 mt-10 ml-2 '>Properties</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 p-4'>
            {propertiesUser.map(task => {
                return <PropertiesUser key={task.id} {...task}/>
            })}
        </div>

    </div>
  )
}

export default ProfileUsers