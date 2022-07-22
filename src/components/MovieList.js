import React from "react";
import {
  useLocation
} from "react-router-dom";

import Loading from "../common/Loading";
import Error from "../common/Error";
import Slider from "../common/Slider"
import Movies from "./Movies";

function MoviesList({ movies, status, error }) {
  
  let location = useLocation();

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4">
      {status === "loading" && <Loading />}
     {
      location.pathname === "/" ? <Slider movies={movies} /> : <Movies movies={movies}/>
     } 
    </div>
  );
}

export default MoviesList;
