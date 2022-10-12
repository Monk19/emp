import React from "react";
import { usePostsQuery } from "../Services/Postsapi";
import { Outlet } from "react-router-dom";

function Home() {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();
  
  return (
    <div>
      {/* {items.map((ele, index) => {
        return <>ele</>;
      })} */}
      {error && <>Something went wrong</>}
      {isLoading && <>....isLoading</>}
      {isFetching && <>....isFetching</>}
      {/* {isSuccess && (
        <>
          {data.map((ele, index) => (
            <div className="title">{ele.title}</div>
          ))}
        </>
      )} */}
      <h1>This is Home</h1>
      <Outlet />
    </div>
  );
}

export default Home;
