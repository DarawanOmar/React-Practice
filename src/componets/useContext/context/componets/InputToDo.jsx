import React,{useState, useContext} from 'react'
import { DataContext } from '../Data-Context/DataProvider'


const InputToDo = () => {
    const{add} = useContext(DataContext)
    const [todo,setToDO] = useState('')
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        const new_to_Do = {id:Math.random(), todo: todo , complete:false}
        add(new_to_Do)
        setToDO('')
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler} className='flex flex-col text-center items-center text-black p-4'>
            <h1 className='font-bold text-center text-3xl font-serif py-4'>To Do</h1>
            <input type="text" onChange={(e)=> setToDO(e.target.value)} value={todo} className='p-3 border-b-2 border-black outline-none rounded-md w-full placeholder:text-center' placeholder='Your Work' />
            <button className='btn-success my-4 w-full btn-hover text-xl'>Add</button>
        </form>
    </div>
  )
}

export default InputToDo