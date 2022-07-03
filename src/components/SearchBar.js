import { useState } from "react";
import { useSelector } from "react-redux";

import { months } from '../common/Months';
import Error from "../common/Error";
import Loading from "../common/Loading";

import useSearch from "../hooks/useSearch";

function SearchBar() {
  const [searching, setSearching] = useState("");

  const { search } = useSelector((state) => state.search);
  const { onKeyUp, handleSearch } = useSearch({ searching });

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
              <div className="flex items-center">
                {i?.media_type === "person" && i?.profile_path ? <img
                  className="w-8 h-10 md:w-16 md:h-20 mr-5 my-2 rounded-md object-cover"
                  src={process.env.REACT_APP_BACKDROP_PATH + '/' + i?.profile_path}
                  alt={i?.name}
                /> : i.media_type === "movie" && i?.poster_path ? <img
                  className="w-8 h-12 md:w-16 md:h-20 mr-5 my-2 rounded-md object-cover"
                  src={process.env.REACT_APP_BACKDROP_PATH + '/' + i?.poster_path}
                  alt={i?.title}
                /> : i.media_type === "tv" && i?.poster_path ? <img
                  className="w-8 h-12 md:w-16 md:h-20 mr-5 my-2 rounded-md object-cover"
                  src={process.env.REACT_APP_BACKDROP_PATH + '/' + i?.poster_path}
                  alt={i?.title}
                /> : ''
                }
                <div className="flex flex-col justify-center">
                  <p className="text-sm"> {i?.media_type === "person" && i?.profile_path ? i?.name : i?.media_type === "movie" && i?.poster_path ? i?.title : i?.media_type === "tv" && i?.poster_path ? i?.name : ''}</p>
                  {i?.media_type === "person" && i?.profile_path ?
                    i?.known_for_department : i?.media_type === "movie" && i?.poster_path ?
                      <p className="text-xs"><span className="mr-1">{months[new Date(i.release_date).getMonth()]}</span>
                        <span className="mr-1">{new Date(i.release_date).getDate()},</span>
                        {new Date(i?.release_date).getFullYear()}</p> : i?.media_type === "tv" && i?.poster_path ?
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
