// import React from 'react'
import { useImmer } from "use-immer";
import { useState } from "react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { fetchMovieDiscoverFilter } from "../redux/movies/services";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchTvDiscoverFilter } from "../redux/tv/services";

function useFilter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [releaseType, setReleaseType] = useState([]);
  const number = ["1", "2", "3", "4", "5"];
  const [filteredMovie, setFilteredMovie] = useImmer({
    sort_by: "popularity.desc",
    include_adult: false,
    include_video: false,
    with_watch_monetization_types: "flatrate",
    release_date_gte: "",
    release_date_lte: format(new Date(), "yyyy-MM-dd"),
    with_release_type: "",
    page: 1,
  });
  const [filteredTv, setFilteredTv] = useImmer({
    sort_by: "popularity.desc",
    with_watch_monetization_types: "flatrate",
    air_date_gte: "",
    air_date_lte: format(new Date(), "yyyy-MM-dd"),
    with_type: "",
    page: 1,
  });

  let location = useLocation();

  const dispatch = useDispatch();

  const handleFiltered = () => {
    if (location.pathname === "/movies") {
      setFilteredMovie((draft) => {
        draft.page = 1;
      });
      dispatch(fetchMovieDiscoverFilter(filteredMovie));
    } else {
      setFilteredTv((draft) => {
        draft.page = 1;
      });
      dispatch(fetchTvDiscoverFilter(filteredTv));
    }
  };

  const handleUseSelected = (e) => {
    location.pathname === "/movies"
      ? setFilteredMovie((draft) => {
          draft.with_watch_monetization_types = e.target.value;
        })
      : setFilteredTv((draft) => {
          draft.with_watch_monetization_types = e.target.value;
        });
  };

  const handleChange = (e) => {
    const hero = number[e.target.dataset.id - 1];
    let newCheckedValues = releaseType.filter((item) => item !== hero);
    if (e.target.checked) newCheckedValues.push(hero);
    setReleaseType(newCheckedValues);
    location.pathname === "/movies"
      ? setFilteredMovie((draft) => {
          draft.with_release_type = newCheckedValues.join("|");
        })
      : setFilteredTv((draft) => {
          draft.with_type = newCheckedValues.join("|");
        });
  };

  const handleDatePicker = (value, name) => {
    if (name === "startDate") {
      setStartDate(value);
      location.pathname === "/movies"
        ? setFilteredMovie((draft) => {
            draft.release_date_gte = format(new Date(value), "yyyy-MM-dd");
          })
        : setFilteredTv((draft) => {
            draft.air_date_gte = format(new Date(value), "yyyy-MM-dd");
          });
    } else {
      setEndDate(value);
      location.pathname === "/movies"
        ? setFilteredMovie((draft) => {
            draft.release_date_lte = format(new Date(value), "yyyy-MM-dd");
          })
        : setFilteredTv((draft) => {
            draft.air_date_lte = format(new Date(value), "yyyy-MM-dd");
          });
    }
  };

  return {
    filteredMovie,
    setFilteredMovie,
    filteredTv,
    setFilteredTv,
    handleUseSelected,
    handleChange,
    setReleaseType,
    releaseType,
    setStartDate,
    startDate,
    endDate,
    handleDatePicker,
    handleFiltered,
  };
}

export default useFilter;
