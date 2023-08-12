import React from 'react'
import InputToDo from './componets/InputToDo'
import ListToDo from './componets/ListToDo'
import DataProvider from './Data-Context/DataProvider'
const App = () => {
  return (
    <div className='max-w-2xl mx-auto'>
        <DataProvider>
            <InputToDo/>
            <ListToDo/>
        </DataProvider>
    </div>
  )
}

export default App