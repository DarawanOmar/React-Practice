import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const RunFirebase = () => {
  return (
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
  )
}

export default RunFirebase