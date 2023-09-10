import React from 'react'


const CommentsList = ({user,comments}) => {

  return (
    <div className='bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50  rounded-md p-4 shadow-xl'>
       
        <div className="flex py-4 items-center space-x-2 text-xs">
            <img className='w-10 h-10 rounded-[30px] ' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph"  alt="" />
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