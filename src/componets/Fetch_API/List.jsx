import React from 'react'

const List = ({item}) => {
  return (
    < >    

      <li className='border-2 border-black'>{JSON.stringify(item)}</li>

    </>

  )
}

export default List