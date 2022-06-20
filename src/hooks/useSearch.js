
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchSearch } from "../redux/search/services";

function useSearch({ searching }) {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onKeyUp = (event) => {
        if (event.key === "Enter" && searching) {
            navigate({
                pathname: `/search/${searching}`,
            });
        }
    };

    const handleSearch = () => {
        if (searching) {
            navigate({
                pathname: `/search/${searching}`,
            });
        }
    };

    useEffect(() => {
        if (searching) {
            const getData = setTimeout(() => {
                dispatch(fetchSearch(searching));
            }, 500);
            return () => {
                clearTimeout(getData);
            };
        }
    }, [dispatch, searching]);
    
    return { handleSearch, onKeyUp }
}

export default useSearch