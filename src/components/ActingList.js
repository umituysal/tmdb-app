import React from "react";

import Error from "../common/Error";
import Loading from "../common/Loading";
import Slider from "../common/Slider";

function ActingList({ casts, status, error }) {

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      {status === "loading" && <Loading />}
      <Slider casts={casts} />
    </>
  );
}

export default ActingList;
