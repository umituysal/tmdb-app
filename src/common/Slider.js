
import React from 'react'
import Slick from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { months } from './Months';

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
function Slider({ movies, tv, casts }) {
  return (
    <div> <Slick className="md:-mx-2"  {...settings}>
      {movies ? movies?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full w-full">
          <div className="rounded-lg mx-2 relative">
            <a href={`/movie/${item?.id}`}>
              {item?.backdrop_path ? (
                <img
                  className="rounded-lg w-full object-cover"
                  src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.backdrop_path}`}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-lg w-full object-cover"
                  alt=""
                  src={process.env.REACT_APP_API_NOT_IMAGE}
                />
              )}

              <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                <div className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10">
                  {item?.vote_average * 10}
                </div>
                <div className="p-6 text-center rounded-lg text-white h-20">
                  <h5 className="text-md font-medium mb-2">
                    {item?.title}
                  </h5>
                  <p className=" text-sm mb-4">
                    <span className="mr-1">{months[new Date(item?.release_date).getMonth()]}</span>
                    <span className="mr-1">{new Date(item?.release_date).getDate()},</span>
                    {new Date(item?.release_date).getFullYear()}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )) : tv ? tv?.map((item) => (
        <div key={item?.id} className="flex justify-center h-full w-full">
          <div className="rounded-lg mx-2 relative">
            <a href={`/tv/${item?.id}`}>
              {item?.backdrop_path ? (
                <img
                  className="rounded-lg w-full  object-cover"
                  src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.backdrop_path}`}
                  alt=""
                />
              ) : (
                <img
                  className="rounded-lg w-full object-cover"
                  alt=""
                  src={process.env.REACT_APP_API_NOT_IMAGE}
                />
              )}

              <div className="absolute top-0 flex flex-col justify-center transition-all items-center bg-black w-full h-full opacity-0 hover:opacity-80">
                <div className="rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 text-white flex justify-center items-center w-10 h-10">
                  {item?.vote_average * 10}
                </div>
                <div className="p-6 text-center rounded-lg text-white h-20">
                  <h5 className=" text-md font-medium mb-2">
                    {item?.name}
                  </h5>
                  <p className=" text-sm mb-4">
                    <span className="mr-1">{months[new Date(item?.first_air_date).getMonth()]}</span>
                    <span className="mr-1">{new Date(item?.first_air_date).getDate()},</span>
                    {new Date(item?.first_air_date).getFullYear()}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )) : casts?.length && casts?.map((item) => (
        <div key={item?.id}>
          <picture className="block md:px-2">
            {item?.backdrop_path ? (
              <img
                className="md:rounded-lg"
                src={`${process.env.REACT_APP_BACKDROP_PATH}${item?.backdrop_path}`}
                alt={item.title}
              />
            ) : (
              <img
                className="md:rounded-lg"
                alt={item.title}
                src={process.env.REACT_APP_API_NOT_IMAGE}
              />
            )}
          </picture>
        </div>
      ))}
    </Slick></div>
  )
}

export default Slider



