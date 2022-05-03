import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/person/:person_id" element={<PersonDetail />} />
          <Route exact path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
