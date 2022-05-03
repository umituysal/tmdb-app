import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";

import { fetchMoviesPopular } from "../../redux/movies/moviesSlice";

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
      <MovieList
        movies={items[0]?.results}
        status={statusPopular}
        error={errorPopular}
      />
    </>
  );
}

export default Home;
