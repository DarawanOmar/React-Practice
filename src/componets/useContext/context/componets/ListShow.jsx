import React from 'react'

const ListShow = ({todo ,toggle ,complete}) => {

  return (
    <div className='shadow-xl p-4 m-4 flex justify-between items-center'>
        <h1 className={todo.complete ? 'text-2xl font-serif font-bold text-green-500' : 'text-2xl font-serif font-bold'}> {todo.todo} </h1>
        <div>
          <button onClick={toggle} className='btn-action btn-hover'>Complete</button>
          <button onClick={complete} className='btn-warning btn-hover'>Delete</button>
        </div>
    </div>
    
  )
}

export default ListShow