import { useParams } from "react-router-dom";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import CastList from "../../components/CastList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Error from "../../common/Error";
import Loading from "../../common/Loading";

import useDetail from "../../hooks/useDetail";

function TvDetail() {

    const { tv_id } = useParams();
    const { tv } = useDetail({ id: tv_id, name: 'tv' })

    if (tv.error) {
        return <Error message={tv.error} />;
    }

    return (
        <>
            <Header />
            <section>
                {tv.status === "loading" && <Loading />}
                <div
                    className="relative h-[800px] md:h-[500px] bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${process.env.REACT_APP_MOVIE_DETAIL_BACKDROP_PATH}/${tv?.data?.backdrop_path ? tv?.data?.backdrop_path : tv?.data?.poster_path})`,
                    }}
                >
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 "
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                    >
                        <div className="flex flex-col md:flex-row items-center h-full">
                            <div className="text-white px-6 md:px-12">
                                <a href={tv_id.data?.homepage}>
                                    {" "}
                                    {tv?.data?.backdrop_path ? (
                                        <img
                                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${tv?.data?.backdrop_path}`}
                                            alt=""
                                            className="h-[200px] min-w-[100px] mt-5 md:h-[400px] md:min-w-[250px] object-cover"
                                        />
                                    ) : (
                                        <img
                                            className="w-24 h-32 mr-5 object-cover rounded-md"
                                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${tv?.data?.poster_path}`}
                                            alt=""
                                        />
                                    )}
                                </a>
                            </div>
                            <div className="text-white text-center md:text-left px-6 md:px-12">
                                <div>
                                    <h1 className="text-2xl lg:text-4xl mb-2 font-semibold capitalize">{tv?.data?.name} <span className="font-light">({new Date(tv?.data?.first_air_date).getFullYear()})</span></h1>
                                    <div className="flex items-center justify-center md:justify-start flex-wrap mb-2">
                                        <span className="text-xs lg:text-md border-solid border-[1px] border-[#ffffff99] p-[1px] mr-1">TV-14</span>
                                        <div className="text-sm mx-2">
                                            <span>0{new Date(tv?.data?.first_air_date).getDate()}/</span>
                                            <span>{new Date(tv?.data?.first_air_date).getMonth() < 10 ? '0' + (new Date(tv?.data?.first_air_date).getMonth() + 1) : (new Date(tv?.data?.first_air_date).getMonth() + 1)}/</span>
                                            {new Date(tv?.data?.first_air_date).getFullYear()}(TR)</div>
                                        <div> <ul className="list-none flex ml-2"><li>{tv?.data?.genres?.map((genre) => (
                                            <span key={genre?.id} className="mr-1">{genre?.name},</span>
                                        ))
                                        }</li></ul></div>
                                    </div>
                                </div>
                                <ul className="flex space-x-3 items-center justify-center md:justify-start">
                                    <li className="relative rounded-full bg-dark-blue !text-white flex justify-center items-center w-20 h-20">
                                        {tv?.data?.vote_average ?
                                            <div>
                                                <CircularProgressbar
                                                    value={Number(tv?.data?.vote_average) * 10}
                                                    text={`${(Number(tv?.data?.vote_average) * 10).toFixed(0, 2)}`}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        textSize: '22px',
                                                        pathTransitionDuration: 0.5,
                                                        pathColor: `rgba( ${Number(tv?.data?.vote_average) * 10 < 75 ? '210, 213, 49' : '33, 208, 122'}, ${Number(tv?.data?.vote_average) * 10})`,
                                                        textColor: '#fff',
                                                        trailColor: '#423D0F',
                                                        backgroundColor: 'bg-dark-blue',
                                                    })}
                                                />
                                                <span className="absolute top-6 right-5 text-[10px]">%</span>
                                            </div> : ""}
                                    </li>
                                    <li className="w-2 font-semibold">Üye Puanları</li>
                                </ul>
                                {
                                    tv?.data?.overview && <><h4 className="my-2 font-semibold text-xl ">Özet</h4><p className="text-sm lg:text-md">{tv?.data?.overview}</p></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <CastList
                    casts={tv?.credits.casts[0]?.slice(0, 10)}
                    error={tv.error}
                    status={tv.status}
                />
            </section>
            <Footer />
        </>
    )
}

export default TvDetail