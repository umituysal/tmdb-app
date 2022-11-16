import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../common/Loading";
import Error from "../common/Error";
import Slider from "../common/Slider";
import { fetchTrend } from "../redux/trend/services";

function Trend() {
  const { trending } = useSelector((state) => state.trending);
  const [timeWindow, setTimeWindow] = useState("day");
  const dispatch = useDispatch();

  const handleGetTrending = (timeWindow) => {
    setTimeWindow(timeWindow);
    dispatch(fetchTrend({ timeWindow }));
  };

  useEffect(() => {
    if (trending.status === "idle") {
      dispatch(fetchTrend({ timeWindow }));
    }
  }, [dispatch, trending.status, timeWindow]);

  if (trending.status === "failed") {
    return <Error message={trending.error} />;
  }

  return (
    <>
      <div className="container mx-auto px-4 my-2 flex flex-col md:flex-start md:flex-row items-center">
        <h2 className="mr-5 mt-4 md:mt-0 text-xl font-semibold">Trend</h2>
        <div className="flex border-dark-blue rounded-full border-2 w-fit text-sm my-4 capitalize cursor-pointer">
          <div
            className={` px-5 py-1 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${
              timeWindow === "day" ? "bg-dark-blue" : ""
            }`}
          >
            <span
              alt="day"
              className={` ${
                timeWindow === "day"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                  : "text-dark-blue"
              }`}
              onClick={() => handleGetTrending("day")}
            >
              Bugün
            </span>
          </div>
          <div
            className={` px-5 py-1 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${
              timeWindow === "week" ? "bg-dark-blue" : ""
            }`}
          >
            <span
              alt="week"
              className={` ${
                timeWindow === "week"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                  : "text-dark-blue"
              }`}
              onClick={() => handleGetTrending("week")}
            >
              Bu Hafta
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {trending.status === "loading" && <Loading />}
        <Slider trending={trending.data[0]} />
      </div>
    </>
  );
}

export default Trend;
