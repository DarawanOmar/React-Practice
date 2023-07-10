import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem'
import Table from './Table'
const RunFetchAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com/';
    const [reqType,setReqType] = useState("users");
    const [item , setItem] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        
        const fetchItems = async ()=>{
    
            try {
                const response = await fetch(`${url}${reqType}`);
                const data = await response.json(); 
                setItem(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        fetchItems()
        
    },[reqType])

    if(isLoading){
        return(<h1 className='text-center text-7xl text-rose-500 mt-28 font-bold'> Loading...  </h1>)
    }
  return (
    <div>
        <Form setReqType={setReqType} reqType={reqType}/>
        {/* <ListItem item={item}/> */}
        <Table item={item}/>

    </div>
  )
}

export default RunFetchAPI