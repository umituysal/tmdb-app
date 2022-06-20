import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPersonCasts,
    fetchPersonDetail,
} from "../redux/personDetail/services";
import {
    fetchMovieDetail,
    fetchMovieCasts,
} from "../redux/movieDetail/services";
import {
    fetchTvDetail,
    fetchTvCasts
} from "../redux/tvDetail/services";

function useDetail({ id, name }) {
    const { movie } = useSelector(
        (state) => state.movie
    );
    const { person } = useSelector(
        (state) => state.person
    );
    const { tv } = useSelector(
        (state) => state.tvDetail
    );

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (tv.status === "idle" && name === "tv") {
            dispatch(fetchTvDetail(id));
        }
        if (tv.credits.status === "idle" && name === "tv") {
            dispatch(fetchTvCasts(id));
        }
        if (person.status === "idle" && name === "person") {
            dispatch(fetchPersonDetail(id));
        }
        if (person.credits.status === "idle" && name === "person") {
            dispatch(fetchPersonCasts(id));
        }
        if (movie.status === "idle" && name === "movie") {
            dispatch(fetchMovieDetail(id));
        }
        if (movie.credits.status === "idle" && name === "movie") {
            dispatch(fetchMovieCasts(id));
        }
    }, [dispatch, id, tv, person, movie, name]);

    return { movie, person, tv }
}

export default useDetail