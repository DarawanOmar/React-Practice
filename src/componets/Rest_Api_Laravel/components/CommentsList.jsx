import React from 'react'


const CommentsList = ({user,comments}) => {

  return (
    <div className='bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50  rounded-md p-4 shadow-xl'>
       
        <div className="flex py-4 items-center space-x-2 text-xs">
          {user.image ? 
            <img className='w-10 h-10 rounded-[30px] object-cover' src={user.photo}  alt="" />
          :
            <img className='w-10 h-10 rounded-full object-cover' src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"  alt="userKnown" />
          }
            <div className="">
                <h1 className='font-bold'>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>
        </div>
        <div className="mb-3 font-bold">
            {comments}
        </div>
    </div>
  )
}

export default CommentsList