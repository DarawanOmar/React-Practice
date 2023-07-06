import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/userSlice";
import React from 'react'

const Users = ({userId}) => {

    const users = useSelector(selectAllUsers)

    const author = users.find((user)=> user.id === userId)

  return (
    <div>
        by {author ? author.name : "Uknown User"}
    </div>
  )
}

export default Users