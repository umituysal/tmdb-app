import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CastList from "../../components/CastList";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {
    fetchTvDetail,
    fetchCastList
} from "../../redux/tvDetail/services";

function TvDetail() {
    const { tv } = useSelector(
        (state) => state.tvDetail
    );
    const { tv_id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (tv.status === "idle") {
            dispatch(fetchTvDetail(tv_id));
            dispatch(fetchCastList(tv_id));
        }
    }, [dispatch, tv_id, tv]);
    if (tv.error) {
        return <Error message={tv.error} />;
      }
    return (
        <>
            <Header />
            <header>
                {tv.status === "loading" && <Loading />}
                <div
                    className="relative"
                    style={{
                        backgroundPosition: "50%",
                        backgroundImage: `url(${process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH}/${tv?.detail?.poster_path})`,
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
                                <a href={tv_id.deta?.homepage}>
                                    {" "}
                                    {tv?.detail?.backdrop_path ? (
                                        <img
                                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${tv?.detail?.backdrop_path}`}
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
                                <h1 className="text-4xl capitalize">{tv?.detail?.name}</h1>
                                <ul className="flex space-x-3 items-center justify-center md:justify-start">
                                    <li className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10">
                                        {tv?.detail?.popularity
                                            ? Number(tv?.detail?.popularity).toFixed(0) % 100
                                            : ""}
                                    </li>
                                    <li>{tv?.detail?.first_air_date}</li>
                                </ul>
                                <h4 className="mt-5">Overwiew</h4>
                                <p>{tv?.detail?.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-5">
                <CastList
                    casts={tv?.credits[0]?.cast?.slice(0, 10)}
                    error={tv.error}
                    status={tv.status}
                />
            </section>
            <Footer />
        </>
    )
}

export default TvDetail