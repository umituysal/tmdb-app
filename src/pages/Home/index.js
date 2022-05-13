import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMoviesPopular } from "../../redux/movies/moviesSlice";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import Footer from "../../components/Footer";

function Home() {
  const { items, statusPopular, errorPopular } = useSelector(
    (state) => state.movies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusPopular === "idle") {
      dispatch(fetchMoviesPopular());
    }
  }, [dispatch, statusPopular]);

  return (
    <>
      <Header />
      <Banner />
      <MovieList
        movies={items[0]?.results}
        status={statusPopular}
        error={errorPopular}
      />
      <Footer />
    </>
  );
}

export default Home;
