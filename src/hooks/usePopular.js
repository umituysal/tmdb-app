import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMoviesPopular } from '../redux/movies/services';
import { fetchTvPopular } from '../redux/tv/services';

function usePopular(selected, setSelected) {
    
    const { movies } = useSelector(
        (state) => state.movies
    );
    const { tv } = useSelector(
        (state) => state.tv
    );

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

    return { handleGetMovie, handleGetTv, movies, tv }
}

export default usePopular