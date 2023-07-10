import React from 'react'

const Cell = ({CellData}) => {
  return (
    <td className='border-2 border-black'>
        {CellData}
    </td>
  )
}

export default Cell