import React from "react";
import Slick from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { months } from "./Months";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NextBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  centerPadding: "20px",
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: "linear",
  arrows: true,
  nextArrow: <NextBtn />,
  prevArrow: <PrevBtn />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        arrows: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
};
function Slider({ movies, tv, casts, trending }) {

  return (
    <div>
      {" "}
      <Slick className="md:-mx-2" {...settings}>
        {movies
          ? movies?.map(
              (item) =>
                item?.backdrop_path && (
                  <div
                    key={item?.id}
                    className="flex justify-center h-full w-full"
                  >
                    <div className="rounded-lg mx-2 relative">
                      <a href={`/movie/${item?.id}`}>
                        <img
                          className="rounded-lg w-full"
                          src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                          alt=""
                        />
                        <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                          <div className="w-14 h-14 relative">
                            <CircularProgressbar
                              value={Number(item?.vote_average * 10).toFixed(0)}
                              text={`${Number(item?.vote_average * 10).toFixed(0)}`}
                              styles={buildStyles({
                                strokeLinecap: "butt",

                                // Text size
                                textSize: "22px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba( ${
                                  Number(item?.vote_average * 10).toFixed(0) < 75
                                    ? "210, 213, 49"
                                    : "33, 208, 122"
                                }, ${Number(item?.vote_average * 10).toFixed(0)})`,
                                textColor: "#fff",
                                trailColor: "#423D0F",
                                backgroundColor: "bg-dark-blue",
                              })}
                            />
                            <span className="absolute text-white top-4 right-3 text-[10px]">
                              %
                            </span>
                          </div>
                          <div className="p-6 text-center rounded-lg text-white h-20">
                            <h5 className="text-md font-medium mb-2">
                              {item?.title}
                            </h5>
                            <p className=" text-sm mb-4">
                              <span className="mr-1">
                                {
                                  months[
                                    new Date(item?.release_date).getMonth()
                                  ]
                                }
                              </span>
                              <span className="mr-1">
                                {new Date(item?.release_date).getDate()},
                              </span>
                              {new Date(item?.release_date).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
            )
          : tv
          ? tv?.map(
              (item) =>
                item?.backdrop_path && (
                  <div
                    key={item?.id}
                    className="flex justify-center h-full w-full"
                  >
                    <div className="rounded-lg mx-2 relative">
                      <a href={`/tv/${item?.id}`}>
                        <img
                          className="rounded-lg w-full  object-cover"
                          src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                          alt=""
                        />
                        <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                          <div className="w-14 h-14 relative">
                            <CircularProgressbar
                              value={Number(item?.vote_average * 10).toFixed(0)}
                              text={`${Number(item?.vote_average * 10).toFixed(0)}`}
                              styles={buildStyles({
                                strokeLinecap: "butt",

                                // Text size
                                textSize: "22px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba( ${
                                  Number(item?.vote_average * 10).toFixed(0) < 75
                                    ? "210, 213, 49"
                                    : "33, 208, 122"
                                }, ${Number(item?.vote_average * 10).toFixed(0)})`,
                                textColor: "#fff",
                                trailColor: "#423D0F",
                                backgroundColor: "bg-dark-blue",
                              })}
                            />
                            <span className="absolute text-white top-4 right-3 text-[10px]">
                              %
                            </span>
                          </div>
                          <div className="p-6 text-center rounded-lg text-white h-20">
                            <h5 className=" text-md font-medium mb-2">
                              {item?.name}
                            </h5>
                            <p className=" text-sm mb-4">
                              <span className="mr-1">
                                {
                                  months[
                                    new Date(item?.first_air_date).getMonth()
                                  ]
                                }
                              </span>
                              <span className="mr-1">
                                {new Date(item?.first_air_date).getDate()},
                              </span>
                              {new Date(item?.first_air_date).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
            )
          : trending
          ? trending?.map(
              (item) =>
                item?.backdrop_path && (
                  <div
                    key={item?.id}
                    className="flex justify-center h-full w-full"
                  >
                    <div className="rounded-lg mx-2 relative">
                      {item?.media_type === "movie" ? (
                        <a href={`/movie/${item?.id}`}>
                          <img
                            className="rounded-lg w-full"
                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                            alt=""
                          />
                          <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                            <div className="w-14 h-14 relative">
                              <CircularProgressbar
                                value={Number(item?.vote_average * 10).toFixed(0)}
                                text={`${Number(item?.vote_average * 10).toFixed(0)}`}
                                styles={buildStyles({
                                  strokeLinecap: "butt",

                                  // Text size
                                  textSize: "22px",
                                  pathTransitionDuration: 0.5,
                                  pathColor: `rgba( ${
                                    Number(item?.vote_average * 10).toFixed(0) < 75
                                      ? "210, 213, 49"
                                      : "33, 208, 122"
                                  }, ${Number(item?.vote_average * 10).toFixed(0)})`,
                                  textColor: "#fff",
                                  trailColor: "#423D0F",
                                  backgroundColor: "bg-dark-blue",
                                })}
                              />
                              <span className="absolute text-white top-4 right-3 text-[10px]">
                                %
                              </span>
                            </div>
                            <div className="p-6 text-center rounded-lg text-white h-20">
                              <h5 className="text-md font-medium mb-2">
                                {item?.title}
                              </h5>
                              <p className=" text-sm mb-4">
                                <span className="mr-1">
                                  {
                                    months[
                                      new Date(item?.release_date).getMonth()
                                    ]
                                  }
                                </span>
                                <span className="mr-1">
                                  {new Date(item?.release_date).getDate()},
                                </span>
                                {new Date(item?.release_date).getFullYear()}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <a href={`/tv/${item?.id}`}>
                          <img
                            className="rounded-lg w-full  object-cover"
                            src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.poster_path}`}
                            alt=""
                          />
                          <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                            <div className="w-14 h-14 relative">
                              <CircularProgressbar
                                value={Number(item?.vote_average * 10).toFixed(0)}
                                text={`${Number(item?.vote_average * 10).toFixed(0)}`}
                                styles={buildStyles({
                                  strokeLinecap: "butt",

                                  // Text size
                                  textSize: "22px",
                                  pathTransitionDuration: 0.5,
                                  pathColor: `rgba( ${
                                    Number(item?.vote_average * 10).toFixed(0) < 75
                                      ? "210, 213, 49"
                                      : "33, 208, 122"
                                  }, ${Number(item?.vote_average * 10).toFixed(0)})`,
                                  textColor: "#fff",
                                  trailColor: "#423D0F",
                                  backgroundColor: "bg-dark-blue",
                                })}
                              />
                              <span className="absolute text-white top-4 right-3 text-[10px]">
                                %
                              </span>
                            </div>
                            <div className="p-6 text-center rounded-lg text-white h-20">
                              <h5 className=" text-md font-medium mb-2">
                                {item?.name}
                              </h5>
                              <p className=" text-sm mb-4">
                                <span className="mr-1">
                                  {
                                    months[
                                      new Date(item?.first_air_date).getMonth()
                                    ]
                                  }
                                </span>
                                <span className="mr-1">
                                  {new Date(item?.first_air_date).getDate()},
                                </span>
                                {new Date(item?.first_air_date).getFullYear()}
                              </p>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                )
            )
          : casts?.length &&
            casts?.map(
              (item) =>
                item?.backdrop_path && (
                  <div key={item?.id}>
                    <picture className="block mx-2">
                      <img
                        className="rounded-lg"
                        src={`${process.env.REACT_APP_BACKDROP_PATH}${item?.backdrop_path}`}
                        alt={item.title}
                      />
                    </picture>
                  </div>
                )
            )}
      </Slick>
    </div>
  );
}

export default Slider;
