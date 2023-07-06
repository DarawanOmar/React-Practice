import React from 'react'
import PostList from './components/PostList'
import { Provider } from 'react-redux'
import { store } from './store'
import AddPostForm from './components/AddPostForm'
const RunPost2 = () => {
  return (
    <div  className='bg-black text-white'>
        <Provider store={store}>
        <AddPostForm/>    
        <PostList/>
        </Provider>
    </div>
  )
}

export default RunPost2