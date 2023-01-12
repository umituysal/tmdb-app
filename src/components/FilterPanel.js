import React, { useState } from "react";
import { HiChevronDown, HiChevronRight, HiCalendar } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFilter from "../hooks/useFilter";
import { useLocation } from "react-router-dom";

function FilterPanel() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  const {
    filteredMovie,
    filteredTv,
    handleChange,
    startDate,
    handleDatePicker,
    endDate,
    handleUseSelected,
    handleOrderSelected,
    handleFiltered,
  } = useFilter();

  return (
    <>
      <div className="flex flex-col">
        <button
          className="inline-flex w-64 justify-between rounded-md border border-gray-300 bg-dark-blue py-3 px-5 text-[1em] font-bold text-white shadow-sm focus:outline-none"
          type="button"
          onClick={() => setShow((show) => !show)}
        >
          Sıralama{" "}
          {show ? (
            <HiChevronDown className="w-6 h-6 ml-2 -mr-1" />
          ) : (
            <HiChevronRight className="w-6 h-6 ml-2 -mr-1" />
          )}
        </button>

        <div
          className={`${
            show
              ? "z-10 w-64 mb-2 p-4 flex flex-col items-start rounded-md  bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "hidden"
          }`}
        >
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-[300] text-gray-900 "
          >
            Sonuçları Sıralama Ölçütü
          </label>
          <select
            defaultValue={
              location.pathname === "/movies"
                ? filteredMovie.sort_by
                : filteredTv.sort_by
            }
            onChange={handleOrderSelected}
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400"
          >
            <option value="popularity.desc">Azalan Popülerlik</option>
            <option value="popularity.asc">Artan Popülerlik</option>
            <option value="vote_average.asc">Artan Oylar</option>
            <option value="vote_average.desc">Azalan Oylar</option>
            {location.pathname === "/movies" ? (
              <option value="primary_release_date.desc">
                Azalan Yayınlanma Tarihi
              </option>
            ) : (
              <option value="first_air_date.desc">
                Azalan Yayınlanma Tarihi
              </option>
            )}
            {location.pathname === "/movies" ? (
              <option value="primary_release_date.asc">
                Artan Yayınlanma Tarihi
              </option>
            ) : (
              <option value="first_air_date.asc">
                Artan Yayınlanma Tarihi
              </option>
            )}
          </select>
        </div>
        <button
          className="inline-flex w-64 justify-between rounded-md border border-gray-300 bg-dark-blue py-3 px-5 text-[1em] font-bold text-white shadow-sm hover:bg-dark-blue focus:outline-none"
          type="button"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Filtrele{" "}
          {isOpen ? (
            <HiChevronDown className="w-6 h-6 ml-2 -mr-1" />
          ) : (
            <HiChevronRight className="w-6 h-6 ml-2 -mr-1" />
          )}
        </button>

        <div
          className={`${
            isOpen
              ? "z-10 w-64 mb-2 p-4 flex flex-col justify-center items-center rounded-md  bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "hidden"
          }`}
        >
          <div className="w-full pb-2 my-2 border-b-2 border-slate-200">
            <label className="block mb-2 text-sm font-[300] text-gray-900">
              İlk gösterim tarihleri
            </label>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                data-id="1"
                onClick={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Gala
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                data-id="2"
                onClick={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Sinema
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                data-id="3"
                onClick={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Digital
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                data-id="4"
                onClick={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Fiziksel
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                data-id="5"
                onClick={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                TV
              </label>
            </div>
            <div className="relative flex items-center ">
              <label
                htmlFor="default-checkbox"
                className="mr-2 text-sm font-medium text-gray-900 "
              >
                Şuradan
              </label>
              <DatePicker
                selected={startDate}
                onChange={(value) => handleDatePicker(value, "startDate")}
                className="border-2 w-full border-dark-blue p-1 focus:outline-none rounded-md pl-2 font-medium text-[14px] "
              />
              <HiCalendar className="absolute right-2" />
            </div>
            <div className="relative flex items-center mt-2 ">
              <label
                htmlFor="default-checkbox"
                className="mr-4 text-sm font-medium text-gray-900"
              >
                Şuraya
              </label>
              <DatePicker
                selected={endDate}
                onChange={(value) => handleDatePicker(value, "endDate")}
                className="border-2 w-full border-dark-blue p-1 focus:outline-none rounded-md pl-2 font-medium text-[14px] "
              />
              <HiCalendar className="absolute right-2" />
            </div>
          </div>

          <div className="w-full my-2">
            <label className="block mb-2 text-sm font-[300] text-gray-900 ">
              Kullanılabilirlik
            </label>
            <select
              value={
                location.pathname === "/movies"
                  ? filteredMovie.with_watch_monetization_types
                  : filteredTv.with_watch_monetization_types
              }
              onChange={handleUseSelected}
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400"
            >
              <option value="flatrate">Stream</option>
              <option value="free">Ücretsiz</option>
              <option value="ads">Reklamlar</option>
              <option value="rent">Kirala</option>
              <option value="buy">Satın al</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleFiltered}
          className="flex justify-center my-2 items-center py-2 rounded-full bg-dark-blue text-[#fff] w-64"
        >
          Ara
        </button>
      </div>
    </>
  );
}

export default FilterPanel;
