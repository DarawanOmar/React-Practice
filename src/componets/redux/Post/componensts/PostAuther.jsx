import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";


import React from 'react'

const PostAuther = ({userId}) => {

    const users = useSelector(selectAllUsers)

    const auther = users.find(user=> user.id === userId )

  return <span> by { auther ? auther.name : "Uknown User"}</span>
}

export default PostAuther