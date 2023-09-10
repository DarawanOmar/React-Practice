import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


const RunShoppingContext = () => {
  return (
    <div>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </div>
  )
}

export default RunShoppingContext