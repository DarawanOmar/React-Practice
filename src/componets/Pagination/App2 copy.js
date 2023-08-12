
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

function App2() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="rounded-md shadow-xl p-4 flex flex-col max-w-xl mx-auto">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="grid grid-cols-3">{displayUsers}</div>

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
      />
    </div>
  );
}

export default App2;
