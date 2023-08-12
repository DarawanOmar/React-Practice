import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App2() {

  const [users,setUsers] = useState(JsonData.slice(0,500));

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pageVisited = pageNumber * usersPerPage; 

  const countPage = Math.ceil(users.length / usersPerPage)

  const pageChange = ({selected}) => {
    setPageNumber(selected)
  }


//                                    20,30
  const displayusers = users.slice(pageVisited,pageVisited + usersPerPage).map((user)=> (
    <>
      <div key={user.id} className="grid grid-cols-3 gap-2  rounded-md ">
        <h1>FirstName : {user.firstName}</h1>
        <h1>LastName : {user.lastName}</h1>
        <h1>Passwrod : {user.password}</h1>
        <h1>Email : {user.email}</h1>
      </div>
    </>
  ))























  // const [users, setUsers] = useState(JsonData.slice(0, 500));
  // const [pageNumber, setPageNumber] = useState(0);

  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = users
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map((user) => {
  //     return (
  //       <div key={user.id} className="rounded-md shadow-xl p-4 flex flex-col max-w-xl mx-auto">
  //         <h3>{user.firstName}</h3>
  //         <h3>{user.lastName}</h3>
  //         <h3>{user.email}</h3>
  //       </div>
  //     );
  //   });

  // const pageCount = Math.ceil(users.length / usersPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  return (
    <div>



      <div >
        {displayusers}
      </div>
      <ReactPaginate
        containerClassName="flex items-center justify-between max-w-xl mx-auto "
        previousLabel='Back'
        nextLabel="Next"
        pageCount={countPage}
        activeLinkClassName="bg-blue-500 px-4 py-1 rounded-md text-white"
        disabledLinkClassName="bg-black/40 text-gray-300 px-4 py-1 rounded-md"
        previousLinkClassName="bg-blue-500 px-4 py-1 rounded-md text-white"
        nextLinkClassName="bg-blue-500 px-4 py-1 rounded-md text-white"
        onPageChange={pageChange}
        breakLabel="<-->"
        breakClassName="text-rose-500"
        

      />
































      {/* <div className="grid grid-cols-1 md:grid-cols-3">{displayUsers}</div>

      <ReactPaginate 
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="flex justify-between items-center max-w-sm mx-auto mt-10 "
        previousLinkClassName="bg-blue-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer text-black "
        nextLinkClassName="bg-blue-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer text-black"
        disabledClassName=" bg-gray-500 text-gray-500  py-2 rounded-md  duration-500 cursor-pointer"
        activeClassName="border-2  border-blue-500 px-4 py-2 rounded-md text-white hover:bg-transparent border-2 hover:border-blue-500  bg-blue-500 duration-500 cursor-pointer text-black hover:text-black"
      /> */}
    </div>
  );
}

export default App2;
