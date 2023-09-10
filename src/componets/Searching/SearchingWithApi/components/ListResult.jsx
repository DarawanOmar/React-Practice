import React from 'react'

const ListResult = ({name}) => {
  return (
    <div>
        <button className='hover:bg-slate-300 w-full active:bg-slate-600 active:text-white'>{name}</button>
    </div>
  )
}

export default ListResult