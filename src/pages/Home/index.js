import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMoviesPopular } from "../../redux/movies/services";
import { fetchTvPopular } from "../../redux/tv/services";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import TvList from "../../components/TvList";
import Footer from "../../components/Footer";
import SignUpBanner from "../../components/SignUpBanner";

function Home() {
  const { movies } = useSelector(
    (state) => state.movies
  );
  const { tv } = useSelector(
    (state) => state.tv
  );
  const [selected, setSelected] = useState('movies')
  const dispatch = useDispatch();

  const handleGetTv = () => {
    setSelected('tv')
    dispatch(fetchTvPopular());
  }

  const handleGetMovie = () => {
    setSelected('movies')
    dispatch(fetchMoviesPopular());
  }

  useEffect(() => {
    if (movies.status === "idle" && selected === 'movies') {
      dispatch(fetchMoviesPopular());
    }
    if (tv.status === "idle" && selected === 'tv') {
      dispatch(fetchTvPopular());
    }
  }, [dispatch, movies.status, selected, tv.status]);

  return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto px-4 flex flex-col md:flex-start md:flex-row items-center">
        <h2 className="mr-5 mt-4 md:mt-0 text-xl font-semibold">Popüler Olanlar</h2>
        <div className="flex border-dark-blue rounded-full border-2 w-fit text-sm my-4 capitalize cursor-pointer">
          <div className={` px-10 py-2 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${selected === 'movies' ? 'bg-dark-blue' : ''}`}><span alt="movies" className={` ${selected === 'movies' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]' : 'text-dark-blue'}`} onClick={handleGetMovie}>film</span></div>
          <div className={` px-10 py-2 flex items-center font-extrabold transition ease-in-out duration-300 rounded-full ${selected === 'tv' ? 'bg-dark-blue' : ''}`} ><span alt="tv" className={` ${selected === 'tv' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]' : 'text-dark-blue'}`} onClick={handleGetTv}>dizi</span></div>
        </div>
      </div>
      {
        selected === 'movies' ? <MovieList
          movies={movies.data[0]}
          status={movies.status}
          error={movies.error}
        /> : <TvList tv={tv.data[0]}
          status={tv.status}
          error={tv.error} />
      }
      <SignUpBanner />
      <Footer />
    </>
  );
}

export default Home;
