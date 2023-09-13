import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import PropertiesUserProfile from '../components/PropertiesUserProfile'
import { Bounce, toast, ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Lottie from 'lottie-react'
import sad from '../components/sad.json'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import ModelAddImageCover from '../components/ModelAddImageCover'
import ModelAddImageProfile from '../components/ModelAddImageProfile'
import ModelAddBio from '../components/ModelAddBio'

const Profile = () => {
    
    const [propertiesUser, setPropertiesUser] = useState([])
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    const [showEdit, setShowEdit] = useState(false)
    const [showAddImageCover, setShowAddImageCover] = useState(false)
    const [showAddImageProfile, setShowAddImageProfile] = useState(false)
    const [showAddBio, setShowAddBio] = useState(false)
    const [reload, setReload] = useState(false)
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
    },[reload])
    const deletePropery = () => {
        const delte = propertiesUser.filter(pro => pro.deleted_at === null)
        // setPropertiesUser(delte)
        console.log(delte);
        // toast.error("Property Delete SuccessFully !");
    }

    const showNotifiDelete = () => [
      toast.error("Property Delete SuccessFully")
    ]

   return (
    <div className='bg-neutral-100 max-w-7xl mx-auto'>

        {/* Top Text & BookMark */}
       <div className="flex justify-between items-center p-3">
            <div className="flex items-center">
                <Link to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold  '><Link to='/setting'> Own Profile</Link></h1>
            </div>
            <span onClick={()=>setShowEdit(prev=>!prev)} className='text-2xl rounded-md'> <BiDotsVerticalRounded/></span>
        </div>
        {/* User Email & Name */}
        {!loader ? (<>
            <div className=''>

                {/* Profile & Cover */}
                <div className="relative">
                    {user?.cover ? 
                    (<>
                        <img className='max-h-[200px] w-full object-cover' src={`http://localhost:8000/upload/users/${user.cover}`} alt="buling" />
                    </>) 
                    :(<>
                        <img className='max-h-[200px] w-full object-cover' src="https://img.freepik.com/free-photo/top-view-wooden-frame-with-copy-space_23-2148553336.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph" alt="buling" />
                    </>)}
                    <span className='absolute top-[50%] left-[35%] md:left-[45%] border-[6px] rounded-full border-white'>
                        {user?.image ? 
                        (<>
                            <img className='w-28 h-28 rounded-full object-cover' src={user.photo}  alt="" />
                        </>) 
                        : (<>
                             <img className='w-28 h-28 rounded-full object-cover' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"  alt="userKnown" />
                        </>)}
                    </span>

                    {/* Edit */}
                    <div className={showEdit ? "absolute top-0 right-0 bg-white flex flex-col justify-center items-center p-3 rounded-md translate-x-0 ease-in-out duration-500 ":"-translate-x-2 text-white ease-in duration-500 -z-10 absolute top-7 right-2"}>
                        <button onClick={()=>{
                            setShowAddImageProfile(prev=>!prev)
                            setShowEdit(prev=>!prev)}} className='border-b-2 border-black pt-1'>Add Profile</button>
                        <button onClick={()=>{
                            setShowAddImageCover(prev=>!prev)
                            setShowEdit(prev=>!prev)}} className='border-b-2 border-black pt-1'>Add Cover</button>
                        <button onClick={()=>{
                            setShowAddBio(prev=>!prev)
                            setShowEdit(prev=>!prev)}} className='pt-1 border-b-2 border-black w-fullakshlerin@example.com'>Add Bio</button>
                    </div>
                </div>
                {/* Name & Bio */}
                <h1 className='text-center mt-10 font-bold text-xl'>{user.name}</h1>
                <div className='text-center mt-3'>
                    {user.bio ? <h1 className='px-2'>{user.bio}</h1> : null}
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
      <h1 className='font-bold text-xl p-3'>Our Properties</h1>
      {propertiesUser.length > 0 ? (<>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 p-3'>
          {propertiesUser.map(task => {
              return <PropertiesUserProfile key={task.id} {...task} loader={loader} deletePropery={deletePropery} setId={setId} setReload={setReload} showNotifiDelete={showNotifiDelete} />
          })}
      </div>
      </>):(
        <div className="text-center mb-16 pb-5">
            {!loader && (<>
                <div className='w-20 h-20 '>
                    <span className='w-10 h-10'>
                        <Lottie animationData={sad} loop={true}/>
                    </span>
                </div>
                <h1 className='mb-4 font-bold '>You Don't Have Property Yet!</h1>
                <Link to='/addproperty' className=' bg-gradient-to-r from-indigo-500  via-indigo-700  to-indigo-500 px-6 py-2 rounded-md text-white'>Add Property</Link>
            </>)}
        </div>
      )}
       {showAddImageCover &&  <ModelAddImageCover setShowAddImageCover={setShowAddImageCover} setReload={setReload}/> }
       {showAddImageProfile &&  <ModelAddImageProfile setShowAddImageProfile={setShowAddImageProfile} setReload={setReload}/> }
       {showAddBio &&  <ModelAddBio setShowAddBio={setShowAddBio} setReload={setReload}/> }
      <ToastContainer position='top-right'theme='light'transition={Bounce}/>
    </div>
  )
}

export default Profile