import React from 'react'
import {HashLoader , ScaleLoader} from 'react-spinners'


const About = () => {


  return (
    <div className=' mt-6  text-center  text-lg font-bold'>
      <span>
            <ScaleLoader color='#4f93df' width={'1rem'} height={'4rem'}/>
        </span>
        <div className='flex flex-col items-center my-10'>
            <h1 className='text-2xl font-bold '>This is a  CRUD Operation With React js</h1>
            <span className=''><HashLoader color='black' /></span> 
        </div>
    </div>
  )
}

export default About