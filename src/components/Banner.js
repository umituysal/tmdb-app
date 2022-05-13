import React from "react";
import HeaderImage from "../images/headerImage.jpeg";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className="container relative px-4 mx-auto z-10">
      <div className="relative w-full">
        <img
          src={HeaderImage}
          alt="test"
          className="h-[400px] md:h-full object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-1/2 translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="text-left w-full text-white px-6 md:px-12">
              <h1 className="text-lg lg:text-5xl font-bold mt-0 mb-6">
                Hoş Geldiniz.
              </h1>
              <h3 className="text-sm lg:text-3xl font-bold mb-8">
                {" "}
                Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
              </h3>
            </div>
            <div className="flex w-full px-6 md:px-12">
              <div className="mb-3 w-full">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
