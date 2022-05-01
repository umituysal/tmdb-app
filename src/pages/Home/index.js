import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
// import Error from "../../components/Error";
import { fetchMoviesPopular } from "../../redux/movies/moviesSlice";

function Home() {
  const data = useSelector((state) => state.movies.items);
  // const status = useSelector((state) => state.movies.isLoading);
  // const error = useSelector((state) => state.movies.error);
  const dispatch = useDispatch();
  console.log("data", data[0]?.results);
  useEffect(() => {
    dispatch(fetchMoviesPopular());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MovieList movies={data[0]?.results}/>
    </>
  );
}

export default Home;
