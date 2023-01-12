import { useParams } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import CastList from "../../components/CastList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Loading from "../../common/Loading";
import Error from "../../common/Error";

import useDetail from "../../hooks/useDetail";

function MovieDetail() {
  const { movie_id } = useParams();
  const { movie } = useDetail({ id: movie_id, name: "movie" });

  if (movie.error) {
    return <Error message={movie.error} />;
  }

  return (
    <>
      <Header />
      {movie.status === "loading" ? (
        <Loading />
      ) : (
        <>
          <section>
            <div
              className="relative h-[900px] md:h-[500px] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${
                  process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH
                }/${
                  movie?.data?.backdrop_path
                    ? movie?.data?.backdrop_path
                    : movie?.data?.poster_path
                })`,
              }}
            >
              <div
                className="absolute top-0 bottom-0 left-0 right-0 "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="container flex flex-col items-center h-full p-4 mx-auto md:flex-row">
                  <div className="text-white">
                    <a href={movie?.data?.homepage}>
                      {" "}
                      {movie?.data?.poster_path ? (
                        <img
                          src={`${process.env.REACT_APP_BACKDROP_PATH}/${movie?.data?.poster_path}`}
                          alt=""
                          className="h-[200px] min-w-[100px] md:h-[450px] md:min-w-[250px] object-cover"
                        />
                      ) : (
                        <img
                          className="object-cover w-24 h-32 mr-5 rounded-md"
                          src={`${process.env.REACT_APP_BACKDROP_PATH}/${movie?.data?.backdrop_path}`}
                          alt=""
                        />
                      )}
                    </a>
                  </div>
                  <div className="px-6 text-center text-white md:text-left md:px-12">
                    <div>
                      <h1 className="mb-2 text-2xl font-semibold capitalize lg:text-4xl">
                        {movie?.data?.title}{" "}
                        <span className="font-light">
                          ({new Date(movie?.data?.release_date).getFullYear()})
                        </span>
                      </h1>
                      <div className="flex flex-wrap items-center justify-center mb-2 md:justify-start">
                        <span className="text-xs lg:text-md border-solid border-[1px] border-[#ffffff99] p-[1px] mr-1">
                          PG-13
                        </span>
                        <div className="mx-2 text-sm">
                          <span>
                            0{new Date(movie?.data?.release_date).getDate()}/
                          </span>
                          <span>
                            {new Date(movie?.data?.release_date).getMonth() < 10
                              ? "0" +
                                (new Date(
                                  movie?.data?.release_date
                                ).getMonth() +
                                  1)
                              : new Date(movie?.data?.release_date).getMonth() +
                                1}
                            /
                          </span>
                          {new Date(movie?.data?.release_date).getFullYear()}
                          (TR)
                        </div>
                        <div>
                          {" "}
                          <ul className="flex ml-4">
                            <li></li>
                            {movie?.data?.genres?.map((genre) => (
                              <span key={genre?.id} className="mr-2">
                                {genre?.name},
                              </span>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="flex items-center justify-center space-x-3 md:justify-start">
                      <li className="relative rounded-full bg-dark-blue !text-white flex justify-center items-center w-16 h-16 md:w-20 md:h-20">
                        {movie?.data?.vote_average ? (
                          <div>
                            <CircularProgressbar
                              value={Number(movie?.data?.vote_average) * 10}
                              text={`${(
                                Number(movie?.data?.vote_average) * 10
                              ).toFixed(0, 2)}`}
                              styles={buildStyles({
                                strokeLinecap: "butt",

                                // Text size
                                textSize: "22px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba( ${
                                  Number(movie?.data?.vote_average) * 10 < 75
                                    ? "210, 213, 49"
                                    : "33, 208, 122"
                                }, ${Number(movie?.data?.vote_average) * 10})`,
                                textColor: "#fff",
                                trailColor: "#423D0F",
                                backgroundColor: "bg-dark-blue",
                              })}
                            />
                            <span className="absolute top-4 right-4 md:top-6 md:right-5 text-[10px]">
                              %
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                      <li className="w-2 font-semibold">Üye Puanları</li>
                    </ul>
                    <p className="mt-2">{movie?.data?.tagline}</p>
                    <h4 className="my-2 text-xl font-semibold">Özet</h4>
                    <p className="text-sm lg:text-md">
                      {movie?.data?.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <h2 className="container px-4 mx-auto text-3xl font-semibold">
              Başrol Oyuncuları
            </h2>
            <CastList
              casts={movie?.credits?.casts[0]?.slice(0, 10)}
              error={movie?.credits?.error}
              status={movie?.credits?.status}
            />
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default MovieDetail;
