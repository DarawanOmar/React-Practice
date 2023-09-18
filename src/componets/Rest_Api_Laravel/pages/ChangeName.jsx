import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack,IoIosArrowDown} from 'react-icons/io'
import { BsPersonFillGear, BsPerson } from 'react-icons/bs'
import { MdChangeCircle , MdPassword, MdMarkEmailUnread} from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { TbPhone } from 'react-icons/tb'
import { IoMdAddCircle } from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Bounce, toast, ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import ModelChangeEmail from '../components/ModelChangeEmail'

const ChangeName = () => {

  const [user, setUser] = useState([]);  
  const [errorsResponseEmail, setErrorsResponseEmail] = useState('');  
  const [errorsResponsePassword, setErrorsResponsePassword] = useState('');  
  const [errorsResponseNewEmail, setErrorsResponseNewEmail] = useState('');  
  const [showInfo, setShowInfo] = useState(false);  
  const [showChnageName, setShowChnageName] = useState(false);
  const [showAddNickname, setShowAddNickname] = useState(false);
  const [showEmailChnageOpen, setShowEmailChnageOpen] = useState(false);
  const [showEmailChnage, setShowEmailChnage] = useState(true);
  const [showEmailChnageNext, setShowEmailChnageNext] = useState(false);
  const [showModelEmailChange, setShowModelEmailChange] = useState(false);
  const [newName, setNewName] = useState('');
  const [nicknameText, setNicknameText] = useState('');

  const schema = yup.object().shape({
    email: yup.string().email().required("Write Your Email"),
    password: yup.string().required('Write your Password') 
  })
  const schema2 = yup.object().shape({
    newemail: yup.string().email().required("Write New Email"),
    emailconfirm: yup.string().oneOf([yup.ref('newemail'),null],"Email Not Match") 
  })

  const {handleSubmit,register,formState:{errors},reset} = useForm({
    resolver : yupResolver(schema)
  })
  const {handleSubmit:handleSubmit2,register:register2,formState:{errors:errors2},reset:reset2} = useForm({
    resolver : yupResolver(schema2)
  })

  useEffect(()=>{
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:8000/api/profile', {headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      if(response.data){
        setUser(response.data)
      }else{
        console.log("Faild Fetch");
      }
    }
    fetchUser()
  },[])

  const handleChangeName = async (e) => {
    e.preventDefault()
     const response = await axios.post('http://localhost:8000/api/changename',{name:newName}, {headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    if(response.data){
      toast.success("Name Have Been Updated");
      setShowChnageName(false)
    }else{
      console.log("Faild Updated");
    }
  }
  const handleAddNickname = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:8000/api/addnickname',{nickname:nicknameText}, {headers: {
     'Authorization': `Bearer ${localStorage.getItem('token')}`,
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   }})
   if(response){
     toast.success("Nickname Have Been Added");
     setShowAddNickname(false)
     reset()
   }else{
     console.log("Failed");
   }
  }

  const handleChangeEmauil = async (data) => {
    const response = await axios.post('http://localhost:8000/api/changeemail',data, {headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    if(response.data.Success){
      setShowEmailChnage(prev=>!prev)
      setShowEmailChnageNext(prev=>!prev)
      reset2()      
    }else{
     setErrorsResponseEmail(response.data.Errors)
     setErrorsResponsePassword(response.data.Password)

    }
  }
  const handleAddNewEmail = async (data) => {
    const response = await axios.post('http://localhost:8000/api/addnewemail',data, {headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    if(response.data.Success){
      toast.success("Email Have Been Updated");
      setShowModelEmailChange(prev=>!prev)
      setShowEmailChnageOpen(false)
    }else{
      setErrorsResponseNewEmail(response.data.Errors);
    }
  }
  

  return (
    <div className='max-w-7xl mx-auto h-screen'>
      <div className="flex items-center p-3">
          <Link  to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack  /></Link>
          <h1 className='text-xl font-bold  '><Link to='/setting'>Setting</Link></h1>
      </div>

      <div className='p-3'>
        {/* Show Personal  */}
            <div onClick={() => setShowInfo(prev=>!prev)} className="p-4 md:p-8 flex justify-between items-center   bg-indigo-50 rounded-2xl z-10">
                  <div className='flex'>
                    <span className='text-xl md:text-2xl'><BsPersonFillGear/></span>
                    <h1 className='font-bold ml-2 md:text-xl'><Link to=''>Persnol Info</Link></h1>
                  </div>
                 <span className='text-lg pr-6'><Link to=''><IoIosArrowDown/></Link></span>
            </div>

            <div className={showInfo ? "p-4 space-y-2 bg-gray-200 rounded-md mt-1 duration-500 ease-in-out " : "-translate-x-96   duration-500 ease-in-out"}>
            {showInfo && 
            <>
              <div className="flex">
                <div className='font-bold flex items-center mr-2'><span><BsPerson/></span> <h1>Username</h1></div>
                <p> {user?.name}</p>
              </div>
              <div className="flex">
                 <div className='font-bold flex items-center mr-2'><span><AiOutlineMail/></span> <h1>Email</h1></div>
                <p> {user?.email}</p>
              </div>
              <div className="flex">
                 <div className='font-bold flex items-center mr-2'><span><MdPassword/></span> <h1>Password</h1></div>
                <p> ********</p>
              </div>
              <div className="flex">
                 <div className='font-bold flex items-center mr-2'><span><TbPhone/></span> <h1>Phone Number</h1></div>
                <p> {user?.phone_number}</p>
              </div>
              </>
            }
            </div>

        {/* Show Change Name  */}
            <div onClick={() => setShowChnageName(prev=>!prev)} className="p-4 md:p-8 flex justify-between items-center bg-indigo-50 rounded-2xl mt-2">
                  <div className='flex'>
                    <span className='text-xl md:text-2xl'><MdChangeCircle/></span>
                    <h1 className='font-bold ml-2 md:text-xl'><Link to=''>Chnage Name</Link></h1>
                  </div>
                 <span className='text-lg pr-6'><Link to=''><IoIosArrowDown/></Link></span>
            </div>
            <div className={showChnageName ? "mt-2 duration-500 ease-in-out bg-gray-200 rounded-md p-3" : "-translate-x-96 -z-10  duration-500 ease-in-out"}>
              {showChnageName &&
              <>
                <h1 className='text-center mb-2'>Your Name is <span className='font-bold'>{user.name}</span> Wanna Change it To ?</h1>
                <form onSubmit={handleChangeName}>
                  <input onChange={(e) => setNewName(e.target.value)}  type="text" className='p-2 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='New Name' />
                  <button type='submit' className='bg-indigo-500 text-white px-4 py-1 rounded-md mt-2 flex justify-center items-center mx-auto'>Save Change</button>
                </form>
              </>
              }</div>

        {/* Add Nick Name */}
            <div onClick={() => setShowAddNickname(prev=>!prev)} className="flex justify-between items-center bg-indigo-50 rounded-2xl p-4 md:p-8 mt-2">
                  <div className='flex'>
                    <span className='text-xl md:text-2xl'><IoMdAddCircle/></span>
                    <h1 className='font-bold ml-2 md:text-xl'><Link to=''>Add Nickname</Link></h1>
                  </div>
                 <span className='text-lg pr-6'><Link to=''><IoIosArrowDown/></Link></span>
            </div>
            <div className={showAddNickname ? "mt-2 duration-500 ease-in-out bg-gray-200 rounded-md p-3" : "-translate-x-96 -z-10  duration-500 ease-in-out"}>
              {showAddNickname &&
              <>
                <h1 className='text-center mb-2'> Display Like <span className='font-bold'>{user.name}(Nickname)</span></h1>
                <form onSubmit={handleAddNickname}>
                  <input onChange={(e)=>setNicknameText(e.target.value)} type="text" className='p-2 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='Nickname' />
                  <button type='submit' className='bg-indigo-500 text-white px-4 py-1 rounded-md mt-2 flex justify-center items-center mx-auto'>Save</button>
                </form>
              </>
              }</div>

          {/* Change Email  */}
          <div onClick={() => setShowEmailChnageOpen(prev=>!prev)} className="flex justify-between items-center bg-indigo-50 rounded-2xl p-4 md:p-8 mt-2">
                  <div className='flex'>
                    <span className='text-xl md:text-2xl'><MdMarkEmailUnread/></span>
                    <h1 className='font-bold ml-2 md:text-xl'><Link to=''>Change Email</Link></h1>
                  </div>
                 <span className='text-lg pr-6 '><Link to=''><IoIosArrowDown/></Link></span>
            </div>
              {/* Email & Password */}
            <div className={showEmailChnageOpen ? "mt-2 duration-500 ease-in-out bg-gray-200 rounded-md p-3" : "-translate-x-96 -z-10  duration-500 ease-in-out"}>
                  {showEmailChnageOpen &&
                  <> {showEmailChnage && <>
                    <h1 className='text-center mb-2 font-bold'> Please Write Your Email & Password</h1>
                    <form onSubmit={handleSubmit(handleChangeEmauil)}>
                      {errorsResponseEmail && <h1 className='text-center text-rose-500'>{errorsResponseEmail}</h1>}
                      {errors && <h1 className='text-center text-rose-500'>{errors.email?.message}</h1>}
                      <input {...register("email")} type="text" className='p-2 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='Email' />
                      {errorsResponsePassword && <h1 className='text-center text-rose-500'>{errorsResponsePassword}</h1>}
                      {errors && <h1 className='text-center text-rose-500 mt-1'>{errors.password?.message}</h1>}
                      <input {...register("password")} type="text" className='p-2 mt-1 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='Password' />
                      <button type='submit' className='bg-indigo-500 text-white px-4 py-1 rounded-md mt-2 flex justify-center items-center mx-auto'>Next</button>
                    </form>
                    </>}
                  </>}
                  {/* New Email */}
                <div className={showEmailChnageNext ? "mt-2 duration-500 ease-in-out bg-gray-200 rounded-md p-3" : "-translate-x-96 -z-10  duration-500 ease-in-out"}>
                  {showEmailChnageNext &&
                  <>
                    <h1 className='text-center mb-2 font-bold'> Write Your New Email </h1>
                    <form onSubmit={handleSubmit2(handleAddNewEmail)}>
                      {errorsResponseNewEmail && <h1 className='text-center text-rose-500'>{errorsResponseNewEmail}</h1>}
                      {errors2 && <h1 className='text-center text-rose-500'>{errors2.newemail?.message}</h1>}
                      <input {...register2("newemail")} type="text" className='p-2 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='New Email' />
                      {errors2 && <h1 className='text-center text-rose-500 mt-1'>{errors2.emailconfirm?.message}</h1>}
                      <input {...register2("emailconfirm")} type="text" className='p-2 mt-1 text-center rounded-md focus:outline-none w-full  placeholder:text-center placeholder:text-gray-400' placeholder='Confirm Email' />
                      <button type='submit' className='bg-indigo-500 text-white px-4 py-1 rounded-md mt-2 flex justify-center items-center mx-auto'>Save</button>
                    </form>
                  </>}
                </div>
            </div>

        </div>
       {showModelEmailChange &&  <ModelChangeEmail/> }
      <ToastContainer position='top-right'theme='light'transition={Bounce}/>

    </div>
  )
}

export default ChangeName