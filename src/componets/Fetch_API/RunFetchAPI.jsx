import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem'
import { ScaleLoader } from 'react-spinners';
const RunFetchAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com/';
    const [reqType,setReqType] = useState("comments");
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
        return(
        <div className='text-center mt-48'>
            <h1 className='text-6xl font-bold pb-8'> Loading.....</h1>
            <ScaleLoader height={'200px'} width={'100px'} color='green'/>
        </div>)
    }
  return (
    <div>
        <Form setReqType={setReqType} reqType={reqType}/>
        <ListItem item={item}/>

    </div>
  )
}

export default RunFetchAPI