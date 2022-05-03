import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesSearch } from "../redux/movies/moviesSlice";
import Error from "./Error";
import Loading from "./Loading";

function SearchBar() {
  const searchData = useSelector((state) => state.movies.search);
  const status = useSelector((state) => state.movies.statusSearch);
  const error = useSelector((state) => state.movies.errorSearch);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(fetchMoviesSearch(search));
    }, 500);
    return () => {
      clearTimeout(getData);
    };
  }, [dispatch, search]);
  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      <div className="input-group relative flex w-full mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          className="form-control  rounded-full  flex-auto  block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300  transition ease-in-out m-0  focus:outline-none"
          placeholder="Film, dizi, kişi ara..."
          aria-label="Search"
          aria-describedby="button-addon2"
        />

        <button
          type="button"
          id="button-addon2"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:text-black px-8 rounded-full -ml-12 text-md"
        >
          Search
        </button>
        <div className="bg-blue-500 block"></div>
      </div>
      <div className="bg-white block rounded-lg px-4 mx-2 -mt-4 z-50">
        {status === "loading" && <Loading />}
        {searchData[0]?.results?.slice(0, 5).map((i) => (
          <a key={i.id} href={`/movie/${i?.id}`}>
            {" "}
            <div className="flex py-2">
              <img
                className="w-14 h-14 mr-5 object-cover"
                src={`${process.env.REACT_APP_BACKDROP_PATH}/${i?.backdrop_path}`}
                alt={i.title}
              />
              <div className="flex flex-col justify-center">
                <p> {i.title}</p>
                <p>{new Date(i.release_date).getFullYear()}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default SearchBar;
