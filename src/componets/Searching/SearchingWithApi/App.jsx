import React from 'react'
import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import ListResult from './components/ListResult'
import axios from 'axios'

const App = () => {
    const[input,setInput] = useState('')
    const[result,setResult] = useState([])

    const axioss = async (value) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const result = response.data.filter(user => {
            return value && user && user.name.toLowerCase().includes(value)
        })
        setResult(result)
    }


    // const fetchData = (value) => (
    //     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
    //         const result = data.filter(user => {
    //             return(
    //                 value && user && user.name.toLowerCase().includes(value) 
    //             )
    //         })
    //         setResult(result)
    //     })
    // )
    const handleSearch = (value) => {
        // fetchData(value) 
        setInput(value)
        axioss(value)
    }
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
        <div className="relative">
            <input value={input} onChange={(e) => handleSearch(e.target.value)} className='p-3 rounded-t-md bg-slate-200 focus:outline-none text-black' type="text" placeholder='Search' />
            <span className='absolute right-4 top-3 text-2xl text-black'><BiSearch/></span>
        </div>
        <div className="bg-slate-200 text-black max-h-[170px] px-4 md:px-2 overflow-y-scroll ">
            {result.map(user => {
                return <ListResult key={user.id} {...user} />
            })}
        </div>
    </div>
  )
}

export default App