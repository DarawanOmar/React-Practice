import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = ({setSearch , posts}) => {

  const handleSearchResult = (e)=>{
    if(!e.target.value) return setSearch(posts)

    const resultArray = posts.filter(post => post.title.includes(e.target.value))
    setSearch(resultArray)
  }


  return (


    <div className=''>
        <form className="bg-black p-2" onSubmit={(e)=>e.preventDefault()}>
          <input type="text"
            className='bg-white p-3 w-2/3'
            placeholder='Search'
            onChange={handleSearchResult}
          />
        </form>
        <div className="max-w-3xl mx-auto flex justify-between items-center p-4 bg-black font-serif text-white ">
            <Link className='hover:bg-white hover:text-black ' to={'/'}>Home</Link>
            <Link className='hover:bg-white hover:text-black ' to={"/newpost"}>New Post</Link>
            <Link className='hover:bg-white hover:text-black ' to={"/about"}>About</Link>
        </div>
    </div>
  )
}

export default NavBar