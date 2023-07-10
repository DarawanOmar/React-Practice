import React from 'react'
import Row from './Row'

const Table = ({item}) => {
  return (
    <div>
        <table className='border-2 border-black'>
            <tbody>
                {item.map((item)=>
                    <Row key={item.id} item={item}/>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table