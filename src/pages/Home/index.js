import { useState } from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import SignUpBanner from "../../components/SignUpBanner";

import usePopular from "../../hooks/usePopular";

import Trend from "../../components/Trend";
import Slider from "../../common/Slider";

function Home() {
  const [selected, setSelected] = useState("movies");
  const { movies, tv, handleGetMovie, handleGetTv } = usePopular(
    selected,
    setSelected
  );
  return (
    <>
      <Header />
      <Banner />
      <div className="container flex flex-col items-center px-4 mx-auto my-2 md:flex-start md:flex-row">
        <h2 className="mt-4 mr-5 text-xl font-semibold md:mt-0">
          Popüler Olanlar
        </h2>
        <div className="flex my-4 text-sm capitalize border-2 rounded-full cursor-pointer border-dark-blue w-fit">
          <div
            className={` px-10 py-1 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${
              selected === "movies" ? "bg-dark-blue" : ""
            }`}
          >
            <span
              alt="movies"
              className={` ${
                selected === "movies"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                  : "text-dark-blue"
              }`}
              onClick={handleGetMovie}
            >
              film
            </span>
          </div>
          <div
            className={` px-10 py-1 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${
              selected === "tv" ? "bg-dark-blue" : ""
            }`}
          >
            <span
              alt="tv"
              className={` ${
                selected === "tv"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                  : "text-dark-blue"
              }`}
              onClick={handleGetTv}
            >
              dizi
            </span>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        {selected === "movies" ? (
          <Slider
            movies={movies.data[0]}
            status={movies.status}
            error={movies.error}
          />
        ) : (
          <Slider tv={tv.data[0]} status={tv.status} error={tv.error} />
        )}
      </div>
      <SignUpBanner />
      <Trend />
      <Footer />
    </>
  );
}

export default Home;
