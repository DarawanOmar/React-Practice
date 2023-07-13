import React from 'react'
import {HashLoader , ScaleLoader} from 'react-spinners'
const About = () => {
  return (
    <div className='h-screen text-white text-center '>
        <span className='pt-16  block'>
            <ScaleLoader color='green' width={'1rem'} height={'4rem'}/>
        </span>
        <div className='flex flex-col items-center my-10'>
            <h1 className='text-2xl font-bold '>This is a CRUD Operation With React js</h1>
            <span className=''><HashLoader color='white' /></span> 
        </div>
        
    </div>
  )
}

export default About