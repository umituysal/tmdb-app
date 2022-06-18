import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../redux/search/services";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

function SearchBar() {
  const { search } = useSelector((state) => state.search);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searching, setSearching] = useState("");

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

  const onKeyUp = (event) => {
    if (event.key === "Enter" && searching) {
      navigate({
        pathname: `/search/${searching}`,
      });
    }
  };

  const handleSearch = () => {
    if (searching) {
      navigate({
        pathname: `/search/${searching}`,
      });
    }
  };

  useEffect(() => {
    if (searching) {
      const getData = setTimeout(() => {
        dispatch(fetchSearch(searching));
      }, 500);
      return () => {
        clearTimeout(getData);
      };
    }
  }, [dispatch, searching]);

  if (search.error) {
    return <Error message={search.error} />;
  }

  return (
    <>
      <div className="input-group relative flex w-full mb-4">
        <input
          value={searching}
          onKeyPress={onKeyUp}
          onChange={(e) => setSearching(e.target.value)}
          type="search"
          className="form-control placeholder:text-sm md:placeholder:text-lg  rounded-full  flex-auto  block w-full px-3 py-2 md:py-4 text-gray-700 bg-white  border border-solid border-gray-300  transition ease-in-out m-0  focus:outline-none"
          placeholder="Film, dizi, kişi ara..."
          aria-label="Search"
          aria-describedby="button-addon2"
        />

        <button
          onClick={handleSearch}
          type="button"
          id="button-addon2"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:text-black px-4 md:px-8 rounded-full -ml-12 text-sm md:text-lg"
        >
          Search
        </button>
        <div className="bg-blue-500 block"></div>
      </div>
      <div className="bg-white block rounded-lg px-4 mx-2 -mt-4 z-50">
        {search.status === "loading" && searching !== "" && <Loading />}
        {searching &&
          search.data[0]?.slice(0, 5)?.map((i) => (
            <a key={i?.id} href={`/${i?.media_type}/${i?.id}`}>
              <div className="flex py-2">
                {i?.media_type === "person" ? <img
                  className="w-8 h-10 md:w-16 md:h-16 mr-5 rounded-md object-cover"
                  src={`${i?.profile_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.profile_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.name}
                /> : i.media_type === "movie" ? <img
                  className="w-8 h-12 md:w-16 md:h-16 mr-5 rounded-md object-cover"
                  src={`${i?.backdrop_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.backdrop_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.title}
                /> : i.media_type === "tv" ? <img
                  className="w-8 h-12 md:w-16 md:h-16 mr-5 rounded-md object-cover"
                  src={`${i?.backdrop_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.backdrop_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.title}
                /> : ''
                }
                <div className="flex flex-col justify-center">
                  <p className="text-sm"> {i?.media_type === "person" ? i?.name : i?.media_type === "movie" ? i?.title : i?.media_type === "tv" ? i?.name : 'Not Found'}</p>
                  {i?.media_type === "person" ?
                    i?.known_for_department : i?.media_type === "movie" ?
                      <p className="text-xs"><span className="mr-1">{months[new Date(i.release_date).getMonth()]}</span>
                        <span className="mr-1">{new Date(i.release_date).getDate()},</span>
                        {new Date(i?.release_date).getFullYear()}</p> : i?.media_type === "tv" ?
                        <p className="text-xs"><span className="mr-1">{months[new Date(i.first_air_date).getMonth()]}</span>
                          <span className="mr-1">{new Date(i.first_air_date).getDate()},</span>
                          {new Date(i?.first_air_date).getFullYear()}</p> : ''}
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
