import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Error from "./Error";
import Loading from "./Loading";

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
function ActingList({ casts, status, error }) {
  if (error) {
    return <Error message={error} />;
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
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {status === "loading" && <Loading />}
      <Slider className="md:-mx-2" {...settings}>
        {casts?.length &&
          casts?.map((item) => (
            <div key={item?.id}>
              <picture className="block md:px-2">
                <img
                  src={`${process.env.REACT_APP_BACKDROP_PATH}/${item?.backdrop_path}`}
                  alt={item?.title}
                  className="md:rounded-lg"
                />
              </picture>
            </div>
          ))}
      </Slider>
    </>
  );
}

export default ActingList;
