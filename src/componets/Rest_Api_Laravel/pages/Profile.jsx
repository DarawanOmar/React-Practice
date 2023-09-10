import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import PropertiesUserProfile from '../components/PropertiesUserProfile'
import Tests from './Tests'
import { Bounce, toast, ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import sad from '../components/sad.json'

const Profile = () => {
    
    const [propertiesUser, setPropertiesUser] = useState([])
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const [id, setId] = useState(null)

    useEffect(()=>{
    setTimeout(() => {
        setLoader(false)
    }, 1500);
    const fettchDataUser = async () =>{
        try {
            const data = await axios.get('http://localhost:8000/api/profile/properties', {headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }});
            const user = await axios.get('http://localhost:8000/api/profile', {headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }});
            if(user && data){
                setUser(user.data)
                setPropertiesUser(data.data.Properties.data)
            }else{
                console.log("have an issue");
            }

        } catch (error) {
            console.log(error);
            setLoader(false)
        }
    }
    fettchDataUser();
    },[])

    const deletePropery = () => {
        const delte = propertiesUser.filter(pro => pro.deleted_at === null)
        // setPropertiesUser(delte)
        console.log(delte);
        // toast.error("Property Delete SuccessFully !");
    }

    const showNotifiUpdate = () => [
      toast.success("Property Upated SuccessFully")
    ]

  return (
    <div className='bg-neutral-100 p-3 max-w-7xl mx-auto'>

        {/* Top Text & BookMark */}
       <div className="flex justify-between items-center ">
            <div className="flex items-center">
                <Link to='/home' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold  '><Link to='/home'> Own Profile</Link></h1>
            </div>
        </div>

        <h1 className='text-center font-bold my-3 text-xl'>Welcome To Own Profile</h1>

        {/* User Email & Name */}
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
      <h1 className='font-bold text-xl my-4 mt-10 '>Properties</h1>
      {propertiesUser.length > 0 ? (<>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 p-3'>
          {propertiesUser.map(task => {
              return <PropertiesUserProfile key={task.id} {...task} loader={loader} deletePropery={deletePropery} setId={setId} showNotifiUpdate={showNotifiUpdate} />
          })}
      </div>
      </>):(
        <div className="text-center mt-10 ">
                <div className='w-20 h-20 '>
                    <span className='w-10 h-10'>
                        <Lottie animationData={sad} loop={true}/>
                    </span>
                </div>
                <h1 className='mb-4 font-bold '>You Don't Have Property Yet!</h1>
            <Link to='/addproperty' className=' bg-gradient-to-r from-indigo-500  via-indigo-700  to-indigo-500 px-6 py-2 rounded-md text-white'>Add Property</Link>
        </div>
      )}

      <ToastContainer position='top-right'theme='light'transition={Bounce}/>
    </div>
  )
}

export default Profile