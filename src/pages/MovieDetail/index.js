import { useParams } from "react-router-dom";

import CastList from "../../components/CastList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Loading from "../../common/Loading";
import Error from "../../common/Error";

import useDetail from "../../hooks/useDetail";

function MovieDetail() {

  const { movie_id } = useParams();
  const { movie } = useDetail({ id: movie_id, name: 'movie' });

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
            backgroundImage: `url(${process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH}/${movie?.data?.poster_path})`,
            height: "500px",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex flex-col md:flex-row items-center h-full">
              <div className="text-white px-6 md:px-12">
                <a href={movie?.data?.homepage}>
                  {" "}
                  {movie?.data?.backdrop_path ? (
                    <img
                      src={`${process.env.REACT_APP_BACKDROP_PATH}/${movie?.data?.backdrop_path}`}
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
                <h1 className="text-2xl md:text-4xl capitalize">{movie?.data?.title}</h1>
                <ul className="flex space-x-3 items-center justify-center md:justify-start">
                  <li className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10">
                    {movie?.data?.popularity
                      ? Number(movie?.data?.popularity).toFixed(0) % 100
                      : ""}
                  </li>
                  <li>{movie?.data?.release_date}</li>
                </ul>
                <h4 className="mt-5">Overwiew</h4>
                <p className="text-sm md:text-md">{movie?.data?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <CastList
          casts={movie?.credits?.casts[0]?.slice(0, 10)}
          error={movie?.credits?.error}
          status={movie?.credits?.status}
        />
      </section>
      <Footer />
    </>
  );
}

export default MovieDetail;
