import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {IoIosArrowBack} from 'react-icons/io'
import {MdBookmarkAdd, MdBookmarkAdded} from 'react-icons/md'
import PropertyList from './PropertyList'
import CommentsList from '../components/CommentsList'
import Tests from '../pages/Tests'

const Property = () => {

    const {id} = useParams();
    const [check, setCheck] = useState([]);
    const [property, setProperty] = useState([]);
    const [comments, setComments] = useState([]);
    const [textComment, setTextComment] = useState('');
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await axios.get(`http://localhost:8000/api/properties/${id}`);
            const comments = await axios.get(`http://localhost:8000/api/propertyfavoraite/${id}`,{headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }});
            const checkadded = await axios.get(`http://localhost:8000/api/checkadded/${id}`,{headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }});
            if (data && comments && checkadded) {
                setComments(comments.data.data)
                setCheck(checkadded.data.data)
                setProperty([data.data.property]);
                setLoader(false)
            }else{
                console.log("Faild Data Back");
            }
        }
        fetchData();
    },[reload])


    const addPropertyToFavorairte = async() => {
        const response = await axios.post(`http://localhost:8000/api/createtablefavoraite`,{ property_id:id, addtofavoraite:"true"},{headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        if(response){
            console.log("Data Add SuccessFully");
        }else{
            console.log("Faild Add");
        }
    }
    const addCommentToProperty = async() => {
        const response = await axios.post(`http://localhost:8000/api/favoraiteaddcomment`,{ property_id:id, comment:textComment},{headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        if(response){
            console.log("Data Add SuccessFully");
            setTextComment('')
        }else{
            console.log("Faild Add");
        }
    }


    if(loader) {
        return (
          <div className=''>
            <div className="">
              <Link to='/home' className="flex items-center space-x-1 p-3">
                <h1  className='text-xl text-indigo-500'><IoIosArrowBack/></h1>
                <h1 className='text-xl font-bold mb-1 '>Property Details</h1>
              </Link>
            </div>
    
            <div className="lex flex-col space-y-3 p-8">
                  <p className='rounded-[40px] w-full h-[140px] bg-gray-300 animate-pulse'></p>
                  <div className='flex justify-between items-center px-4'>
                    <p className='bg-gray-300 rounded-md h-6 w-32 animate-pulse'></p>
                    <p className='bg-gray-300 rounded-md h-6 w-10 animate-pulse'></p>
                  </div>
                  <p className='bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse ml-4'> </p>
                  <div className="flex space-x-4 px-2 mt-2 ml-4">
                    <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                    <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                    <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                    <div className='bg-gray-300 h-5 rounded-md w-8 animate-pulse'></div>
                  </div>
              </div>
            <div className="lex flex-col space-y-3 p-3">
                {<Tests/>}
              </div>
          </div>
        )
      }

      
  return (
    <div className='max-w-7xl mx-auto bg-neutral-100'>

        {/* Top Arrow Back & BookMark */}
        <div className="flex justify-between items-center p-2 px-4">
            <div className="flex items-center space-x-3 p-1">
                <Link to='/home' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold '>Property Details</h1>
            </div>
            {/* BookMark Icon */}
            {check.length > 0 ?
                <span className='text-indigo-600 text-xl'>
                    {check[0].isfavoraite === "true" ? 
                    <button>{ <MdBookmarkAdded/>}</button> 
                    : <button onClick={() => {
                        addPropertyToFavorairte()
                        setReload(prev=>!prev)
                    }}>{ <MdBookmarkAdd/>}</button>}
                </span>
                :
                <span className='text-indigo-600 text-xl'> 
                <button onClick={() => {
                    addPropertyToFavorairte()
                    setReload(prev=>!prev)
                    }}>{ <MdBookmarkAdd/>}
                </button>
                </span>
            }
        </div>

        {/* Property */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-7">
            {property.map(item => {
                return <PropertyList key={item.id} {...item} />
            })}
        </div>
        
        <hr className='my-2 h-[1px] bg-black mx-auto w-1/2' />
        {/* Add Comment */}
        <div className="flex flex-col justify-center items-center mb-24 ">
            <h1 className='text-center font-bold mb-2'>You Can Write Your Opinion About This Proaperty</h1>
            <textarea onChange={(e)=>setTextComment(e.target.value)} value={textComment} type="text" className='p-2 text-center rounded-md w-full bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50 focus:outline-none placeholder:text-center' placeholder='Comment...'/>
            <button onClick={() => {
                addCommentToProperty()
                setReload(prev=>!prev)
                }} className='bg-gradient-to-b from-indigo-500  via-indigo-700  to-indigo-500 px-6 py-2 mt-3 rounded-md text-white'>Post Comment</button>
        </div>

        {/* Comments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-20">
            {comments && (<>
                {comments?.map((comment,index) =>{
                    return <CommentsList key={index} {...comment} />
                })}
            </>)}
        </div>

    </div>
  )
}

export default Property