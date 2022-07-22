import { useState } from "react";

import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Footer from "../../components/Footer";

import usePopular from "../../hooks/usePopular";

function Movies() {

    const [selected, setSelected] = useState('movies')
    const { movies } = usePopular(selected, setSelected)

    return (
        <>
            <Header />
            <MovieList movies={movies.data[0]}
                status={movies.status}
                error={movies.error} />
            <Footer />
        </>
    );
}

export default Movies;
