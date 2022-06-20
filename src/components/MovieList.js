import React from "react";

import Loading from "../common/Loading";
import Error from "../common/Error";
import Slider from "../common/Slider"

function MoviesList({ movies, status, error }) {
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4">
      {status === "loading" && <Loading />}
      <Slider movies={movies} />
    </div>
  );
}

export default MoviesList;
