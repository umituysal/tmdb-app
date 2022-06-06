import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMoviesPopular } from "../../redux/movies/services";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import Footer from "../../components/Footer";

function Home() {
  const { movies, popular} = useSelector(
    (state) => state.movies
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (popular.status === "idle") {
      dispatch(fetchMoviesPopular());
    }
  }, [dispatch, popular.status]);

  return (
    <>
      <Header />
      <Banner />
      <MovieList
        movies={movies[0]}
        status={popular.status}
        error={popular.error}
      />
      <Footer />
    </>
  );
}

export default Home;
