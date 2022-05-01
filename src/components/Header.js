import React from "react";
import HeaderImage from "../images/headerImage.jpeg";
function Header() {
  return (
    <div className="container relative px-4 mx-auto ">
      <div className="relative w-full">
        <img src={HeaderImage} alt="test" className="h-[400px] md:h-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-1/2 translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="text-left w-full text-white px-6 md:px-12">
              <h1 className="text-lg lg:text-5xl font-bold mt-0 mb-6">Hoş Geldiniz.</h1>
              <h3 className="text-sm lg:text-3xl font-bold mb-8">
                {" "}
                Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
              </h3>
            </div>
            <div className="flex w-full px-6 md:px-12">
              <div className="mb-3 w-full">
                <div className="input-group relative flex w-full mb-4">
                  <input
                    type="search"
                    className="form-control  rounded-full  flex-auto  block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300  transition ease-in-out m-0  focus:outline-none"
                    placeholder="Film, dizi, kişi ara..."
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    id="button-addon2"
                    type="button"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:text-black px-8 rounded-full -ml-12 text-md"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
