import React from 'react'

const List = ({item}) => {
  return (
    <li>
      {JSON.stringify(item)}
    </li>
  )
}

export default List