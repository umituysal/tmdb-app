import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import PersonDetail from "./pages/PersonDetail";
import SearchList from "./pages/SearchList";
import TvDetail from "./pages/TvDetail";
import TvShows from "./pages/TvShows";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/person/:person_id" element={<PersonDetail />} />
          <Route exact path="/movie/:movie_id" element={<MovieDetail />} />
          <Route exact path="/tv/:tv_id" element={<TvDetail />} />
          <Route exact path="/search/:query" element={<SearchList />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tv" element={<TvShows />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
