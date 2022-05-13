import React from "react";
import Error from "./Error";
import Loading from "./Loading";

function CastList({ movies, errorCast, statusCast }) {
  if (errorCast) {
    return <Error message={errorCast} />;
  }
  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      {statusCast === "loading" && <Loading />}
      {movies?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full">
          <div className="rounded-lg relative">
            <a href={`/person/${item?.id}`}>
              <img
                className="rounded-lg w-full object-cover"
                src={process.env.REACT_APP_BACKDROP_PATH + item?.profile_path}
                alt=""
              />
            </a>
            <div className="p-6 text-center rounded-lg">
              <h5 className=" text-xl text-black font-medium mb-2">
                {item?.name}
              </h5>
              <p className="text-black text-base mb-4">{item?.character}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CastList;
