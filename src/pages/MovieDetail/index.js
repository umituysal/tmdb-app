import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CastList from "../../components/CastList";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {
  fetchMovieDetail,
  fetchCastList,
} from "../../redux/movieDetail/services";

function MovieDetail() {
  const { movieDetail, casts, movie, cast } = useSelector(
    (state) => state.movie
  );

  const { movie_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie.status === "idle") {
      dispatch(fetchMovieDetail(movie_id));
    }
    if (cast.status === "idle") {
      dispatch(fetchCastList(movie_id));
    }
  }, [dispatch, movie_id, movie, cast]);

  if (movie.error) {
    return <Error message={movie.error} />;
  }
  return (
    <>
      <Header />
      <header>
        {movie.status === "loading" && <Loading />}
        <div
          className="relative"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH}/${movieDetail?.poster_path})`,
            height: "500px",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex flex-col md:flex-row movieDetails-center h-full">
              <div className=" text-white px-6 md:px-12">
                <a href={movieDetail?.homepage}>
                  {" "}
                  {movieDetail?.backdrop_path ? (
                    <img
                      src={`${process.env.REACT_APP_BACKDROP_PATH}/${movieDetail?.backdrop_path}`}
                      alt=""
                      className="h-[200px] min-w-[100px] mt-5 md:h-[400px] md:min-w-[250px] object-cover"
                    />
                  ) : (
                    <img
                      className="w-24 h-32 mr-5 object-cover rounded-md"
                      src={process.env.REACT_APP_API_NOT_IMAGE}
                      alt=""
                    />
                  )}
                </a>
              </div>
              <div className="text-white text-center md:text-left px-6 md:px-12">
                <h1 className="text-4xl capitalize">{movieDetail?.title}</h1>
                <ul className="flex space-x-3 movieDetails-center justify-center md:justify-start">
                  <li className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center movieDetails-center w-10 h-10">
                    {movieDetail?.popularity
                      ? Number(movieDetail?.popularity).toFixed(0) % 100
                      : ""}
                  </li>
                  <li>{movieDetail?.release_date}</li>
                </ul>
                <h4 className="mt-5">Overwiew</h4>
                <p>{movieDetail?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <CastList
          casts={casts[0]?.cast?.slice(0, 10)}
          error={cast.error}
          status={cast.status}
        />
      </section>
      <Footer />
    </>
  );
}

export default MovieDetail;
