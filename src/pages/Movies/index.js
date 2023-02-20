import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchMovieDiscover } from "../../redux/movies/services";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterPanel from "../../components/FilterPanel";

import { months } from "../../common/Months";
import Error from "../../common/Error";
import LoadingPage from "../../common/LoadingPage";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Movies() {
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.status === "idle") {
      dispatch(fetchMovieDiscover());
    }
  }, [dispatch, movies.status]);

  if (movies.error) {
    return <Error message={movies.error} />;
  }
  return (
    <>
      {movies.status === "loading" ? (
        <LoadingPage />
      ) : (
        <>
          <Header />

          <div className="container px-4 mx-auto ">
            <h1 className="text-start my-6 text-[1.6em]">Popüler Filmler</h1>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
              <div className="lg:mr-auto">
                <FilterPanel />
              </div>

              <div className="grid grid-cols-1 gap-6 ml-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                {movies?.data[0]?.length > 0 ? (
                  movies?.data[0]?.map((item) => (
                    <div
                      key={item?.id}
                      className="flex justify-center h-full shadow-xl rounded-xl"
                    >
                      <div className="relative rounded-lg">
                        <a href={`/movie/${item?.id}`}>
                          <img
                            className="object-cover w-full"
                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                            alt=""
                          />
                        </a>
                        <div className="h-32 p-6 text-center bg-white rounded-lg">
                          <h5 className="mb-2 text-sm font-medium text-black ">
                            {item?.title}
                          </h5>
                          <p className="mb-4 text-sm ">
                            <span className="mr-1">
                              {months[new Date(item?.release_date).getMonth()]}
                            </span>
                            <span className="mr-1">
                              {new Date(item?.release_date).getDate()},
                            </span>
                            {new Date(item?.release_date).getFullYear()}
                          </p>
                          <div className="rounded-full bg-dark-blue !text-white flex justify-center items-center w-10 h-10 absolute bottom-28 left-4">
                            <CircularProgressbar
                              value={Number(item?.vote_average) * 10}
                              text={`${(
                                Number(item?.vote_average) * 10
                              ).toFixed(0, 2)}`}
                              styles={buildStyles({
                                strokeLinecap: "butt",
                                textSize: "26px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba( ${
                                  Number(item?.vote_average) * 10 < 75
                                    ? "210, 213, 49"
                                    : "33, 208, 122"
                                }, ${Number(item?.vote_average) * 10})`,
                                textColor: "#fff",
                                trailColor: "#423D0F",
                                backgroundColor: "bg-dark-blue",
                              })}
                            />
                            <span className="absolute text-white top-3 right-1.5 text-[8px]">
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <Error message="Aradığınız sonuç bulunamamıştır!" />
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movies;
