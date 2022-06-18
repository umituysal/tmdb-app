import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
function TvList({ tv, status, error }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
  if (error) {
    return <Error message={error} />;
  }
  return (

    <div className="container mx-auto px-4">
      {status === "loading" && <Loading />}

      <Slider className="md:-mx-2"  {...settings}>
        {tv?.map((item) => (
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
        ))}
      </Slider>
    </div>
  );
}

export default TvList;
