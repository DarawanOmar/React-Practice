import React from 'react'
import List from './List'
const ListItem = ({item}) => {
  return (
    <div>
      {item.map((item)=>(
        <ul key={item.id} >
          <List item={item} />
        </ul>
      ))}
    </div>
  )
}

export default ListItem