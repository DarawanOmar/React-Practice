import React,{useContext} from 'react'
import { DataContext } from '../Data-Context/DataProvider'
import ListShow from './ListShow'

const ListToDo = () => {
    const {todos, toggle , complete} = useContext(DataContext)
    if(todos.length === 0) {
        return <h1 className='text-center text-rose-500 text-2xl font-serif font-bold '> Your List is Empty </h1>
    }
  return (
    <div>
      {/* todos:[{},{},{}] */}
        {todos.map(todo => {
            return <ListShow key={todo.id} todo={todo} toggle={() => toggle(todo.id)} complete={() => complete(todo.id)} />
        })}
    </div>
  )
}

export default ListToDo