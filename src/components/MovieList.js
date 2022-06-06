import React from "react";
import Loading from "./Loading";
import Error from "./Error";
function MovieList({ movies, status, error }) {
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      {status === "loading" && <Loading />}
      {movies?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full">
          <div className="rounded-lg relative">
            <a href={`/movie/${item?.id}`}>
              {item?.backdrop_path ? (
                <img
                  className="rounded-lg w-full  object-cover"
                  src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.backdrop_path}`}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-lg w-full  object-cover"
                  alt=""
                  src={process.env.REACT_APP_API_NOT_IMAGE}
                />
              )}
            </a>
            <div className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10 absolute -mt-6 ml-4">
              {item?.vote_average}
            </div>
            <div className="p-6 text-center rounded-lg">
              <h5 className=" text-xl text-black font-medium mb-2">
                {item?.title}
              </h5>
              <p className="text-black text-base mb-4">{item?.release_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
