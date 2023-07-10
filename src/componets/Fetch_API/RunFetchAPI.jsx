import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Form from './Form';
import ListItem from './ListItem'
import Table from './Table'
const RunFetchAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com/';
    const [reqType,setReqType] = useState("");
    const [item , setItem] = useState([])

    useEffect(()=>{
        
        const fetchItems = async ()=>{
    
            try {
                const response = await fetch(`${url}${reqType}`);
                const data = await response.json(); 
                setItem(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchItems()
        
    },[reqType])

  return (
    <div>
        <Form setReqType={setReqType} reqType={reqType}/>
        {/* <ListItem item={item}/> */}
        <Table item={item}/>

    </div>
  )
}

export default RunFetchAPI