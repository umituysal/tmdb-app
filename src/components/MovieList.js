import React from "react";

function MovieList({ movies }) {
  console.log("mo-vies");
  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-4 gap-6">
      {movies?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full">
          <div className="rounded-lg relative">
            <a href="#!">
              <img
                className="rounded-lg w-full h-[500px]"
                src={process.env.REACT_APP_BACKDROP_PATH + item?.backdrop_path}
                alt=""
              />
            </a>
            <div className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10 absolute -mt-6 ml-4">{item?.vote_average}</div>
            <div className="p-6 text-center rounded-lg">
              <h5 className=" text-xl text-black font-medium mb-2">
                {item?.title}
              </h5>
              <p className="text-black text-base mb-4">
                {item?.release_date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
