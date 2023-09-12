import axios from 'axios'
import React from 'react'
import {MdWarning} from 'react-icons/md'

const ModelDeleteProperty = ({setShowModel, id, deletePropery, setId}) => {

  const handleDeletePropety = async () => {
    try {
        await axios.delete(`http://localhost:8000/api/profile/properties/delete/${id}`, {headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }});
        setShowModel(false);
        setId(id);
        deletePropery();
    } catch (error) {
        console.error("Error deleting property:", error);
    }
}

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <div className="flex flex-col px-3">
        <div className= 'px-2 rounded-md bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50 text-black'>

          <div className="flex justify-between items-center p-1">
              <h1 className='font-bold'>Delete Property</h1>
              <button onClick={() => setShowModel(false)} className='bg-gradient-to-r from-red-600 to-red-400 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>x</span></button>
          </div>

          <div className='flex flex-col p-4 justify-center items-center text-center '>
            <div className='flex items-center pb-2 '>
              <span className='text-2xl text-red-500'><MdWarning/></span>
              <h1 className='font-bold text-xl'>Warning</h1>
            </div>
            <p>Are You Sure Want To Delete Property ? </p>
          </div>

            <div className='flex justify-center items-center space-x-4 mb-3'>
                <button onClick={() => setShowModel(false)} className='bg-gradient-to-r from-red-600 to-red-400 text-white px-4 py-1 rounded-md'>No</button>
                <button onClick={handleDeletePropety} className='bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-1 rounded-md'>Yes</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default ModelDeleteProperty