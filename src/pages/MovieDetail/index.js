import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CastList from "../../components/CastList";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchMovieDetail,
  fetchCastList,
} from "../../redux/movieDetail/services";

function MovieDetail() {
  const { item, casts, statusDetail, errorDetail, statusCast, errorCast } =
    useSelector((state) => state.movie);

  const { movie_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (statusDetail === "idle") {
      dispatch(fetchMovieDetail(movie_id));
    }
    if (statusCast === "idle") {
      dispatch(fetchCastList(movie_id));
    }
  }, [dispatch, movie_id, statusCast, statusDetail]);

  if (errorDetail) {
    return <Error message={errorDetail} />;
  }
  return (
    <>
      <header>
        {statusDetail === "loading" && <Loading />}
        <div
          className="relative"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH}/${item?.poster_path})`,
            height: "500px",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex flex-col md:flex-row items-center h-full">
              <div className=" text-white px-6 md:px-12">
                <a href={item?.homepage}>
                  {" "}
                  <img
                    src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.backdrop_path}`}
                    alt=""
                    className="h-[200px] min-w-[100px] mt-5 md:h-[400px] md:min-w-[250px] object-cover"
                  />
                </a>
              </div>
              <div className="text-white text-center md:text-left px-6 md:px-12">
                <h1 className="text-4xl capitalize">{item?.title}</h1>
                <ul className="flex space-x-3 items-center justify-center md:justify-start">
                  <li className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10">
                    {item?.popularity
                      ? Number(item?.popularity).toFixed(0) % 100
                      : ""}
                  </li>
                  <li>{item?.release_date}</li>
                </ul>
                <h4 className="mt-5">Overwiew</h4>
                <p>{item?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <CastList movies={casts[0]?.cast?.slice(0, 10)} error={errorCast} />
      </section>
    </>
  );
}

export default MovieDetail;
