import React from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import PostList from './componensts/PostList'
import AddPostForm from './componensts/AddPostForm'
import Users from './componensts/Users'
const RunPost = () => {
  return (
    <div className='bg-black text-white max-w-2xl mx-auto'>
        <Provider store={store}>
            <AddPostForm/>
            <Users/>
            <PostList/>
        </Provider>
    </div>
  )
}

export default RunPost