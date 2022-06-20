import React from "react";

import Error from "../common/Error";
import Loading from "../common/Loading";

function CastList({ casts, error, status }) {
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      {status === "loading" && <Loading />}
      {casts?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full">
          <div className="rounded-lg relative">
            <a href={`/person/${item?.id}`}>
              {item?.profile_path ? (
                <img
                  className="rounded-lg w-full object-cover"
                  src={process.env.REACT_APP_BACKDROP_PATH + item?.profile_path}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-lg w-full object-cover"
                  src={process.env.REACT_APP_API_NOT_IMAGE}
                  alt=""
                />
              )}
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
