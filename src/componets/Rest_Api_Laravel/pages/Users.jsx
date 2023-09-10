import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ListUser from '../components/ListUser'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'


const Users = () => {
  const [user, setuser] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [search, setsearch] = useState('');

  
  useEffect(()=>{
    const ftechUser = async () => {
      const response = await axios.get('http://localhost:8000/api/users',{headers:{"Accept" : "application/json"}})
      if(response){
        setuser(response.data.users)
      }else{
        console.log("error");
      }
    }
    ftechUser();

  },[])

  useEffect(()=>{
     search ? setsearchResult(user.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))) : setsearchResult(user)
  },[search,user])

  return (
    <div className='bg-neutral-200 h-screen'>

      {/* Top text Back Button */}
      <div className="flex justify-between items-center p-2">
            <div className="flex items-center space-x-3">
                <Link to='/properties' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold mb-1 '>Property Owners</h1>
            </div>
        </div>

        {/* Filter Search */}
          <div className='px-6 mt-5'>
            <div className="flex bg-white items-center rounded-2xl">
                <span className='text-blue-600  p-2 text-2xl'><FiSearch/></span>
                <input onChange={(e)=>setsearch(e.target.value)} value={search} className='p-3 bg-white focus:outline-none  rounded-lg  placeholder:text-gray-400 shadow-sm' type="text" placeholder='Search...' />
            </div>
          </div>

        {/* Users */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 pb-20">
          {searchResult.map(user=>{
            return <ListUser key={user.id} {...user}/>
          })}
        </div>
    </div>
  )
}

export default Users