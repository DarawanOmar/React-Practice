import React from 'react'
import Button from './Button'

const Form = ({setReqType ,reqType}) => {
return(
    <form className='grid grid-cols-3 top-0 sticky bg-white' onSubmit={(e)=>e.preventDefault()}>
        <Button 
        buttonText = "users"
        reqType={reqType}
        setReqType={setReqType}
        />
        <Button 
        buttonText = "posts"
        reqType={reqType}
        setReqType={setReqType}
        />
        <Button 
        buttonText = "comments"
        reqType={reqType}
        setReqType={setReqType}
        />
    </form>
)
}

export default Form