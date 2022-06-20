import React from "react";

import Loading from "../common/Loading";
import Error from "../common/Error";
import Slider from "../common/Slider";

function TvList({ tv, status, error }) {
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4">
      {status === "loading" && <Loading />}
      <Slider tv={tv} />
    </div>
  );
}

export default TvList;
