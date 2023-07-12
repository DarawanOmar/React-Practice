import React from 'react'

const SearchForm = ({posts , setSearchResult}) => {

  const handelSubmit = (e)=>{
    e.preventDefault()
  }

  const handelSetSearch = (e)=>{
    if(!e.target.value) return setSearchResult(posts)

    const resultArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
    setSearchResult(resultArray)
  }

  return (
    <form onSubmit={handelSubmit} className='p-4'>
      <input className='w-full p-4 bg-green-400 placeholder:text-2xl placeholder:text-white my-4 text-center' placeholder='Search' type="text" onChange={handelSetSearch} />
    </form>
  )
}

export default SearchForm