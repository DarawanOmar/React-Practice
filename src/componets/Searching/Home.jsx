import React from "react";
import PostList from "./PostList";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const Home = ({ searchResults, error, isLoading }) => {
  const [pageNumbe, setPageNumber] = useState(0);
  const displayPerPage = 3;

  const pageVisited = pageNumbe * displayPerPage;

  const pageCount = searchResults.length / displayPerPage;
  const pageSelected = ({ selected }) => {
    setPageNumber(selected);
  };

  const posts = searchResults
    .slice(pageVisited, pageVisited + displayPerPage)
    .map((post) => {
      return <PostList key={post.id} post={post} />;
    });

  return (
    <div className="p-3">
      {isLoading && (
        <p className="text-center text-2xl font-bold text-white pt-16 h-screen">
          Loading Posts ......
        </p>
      )}
      {error && (
        <p className="text-center text-2xl font-bold text-red-500 pt-16 h-screen">
          {error}
        </p>
      )}
      {!error && !isLoading && posts}
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}        onPageChange={pageSelected}        containerClassName="flex justify-between items-center max-w-sm mx-auto mt-10 text-white"
        // previousLinkClassName="bg-blue-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer text-black "
        // nextLinkClassName="bg-blue-500 px-4 py-2 rounded-md text-white duration-500 cursor-pointer text-black"
        disabledLinkClassName="  text-gray-400   rounded-md  duration-500 cursor-pointer"
        activeClassName="border-2  border-blue-500 px-4 rounded-md text-white hover:bg-transparent border-2 hover:border-blue-500  bg-blue-500 duration-500 cursor-pointer text-black hover:text-white"
      />
    </div>
  );
};

export default Home;
