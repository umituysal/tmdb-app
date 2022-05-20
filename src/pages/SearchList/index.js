import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { fetchMoviesSearch } from "../../redux/movies/moviesSlice";

function SearchList() {
  const searchData = useSelector((state) => state.movies.search);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let searchName = "";
  searchName = search.split("?query=").pop();

  useEffect(() => {
    dispatch(fetchMoviesSearch(searchName));
  }, [dispatch, searchName]);
  return (
    <>
      <Header />
      <div className="grid grid-col md:grid-cols-6 container px-4 mx-auto w-full my-4">
        <div className="col-span-2 hidden md:block mx-10 bg-white drop-shadow-xl h-min rounded-md">
          <div className="text-md p-4 bg-dark-blue rounded-md text-white">
            {" "}
            Arama Sonuçları
          </div>
          <ul className="flex flex-col  my-2  leading-8 capitalize">
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>filmler</div>
              <div>({searchData[0]?.total_results})</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>diziler</div>
              <div>(0)</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>kişiler</div>
              <div>(0)</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>koleksiyonlar</div>
              <div>(0)</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>etiketler</div>
              <div>(0)</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>şirketler</div>
              <div>(0)</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>ağlar</div>
              <div>(0)</div>
            </li>
          </ul>
        </div>

        <div className="col-auto md:col-span-4 py-4">
          {searchData[0]?.results?.map((i) => (
            <div
              key={i.id}
              className="bg-white block rounded-lg px-4 mx-2 -mt-4 z-50 drop-shadow-lg my-8"
            >
              <a href={`/movie/${i?.id}`}>
                {" "}
                <div className="flex py-2">
                  <img
                    className="w-24 h-32 mr-5 object-cover rounded-md"
                    src={`${process.env.REACT_APP_BACKDROP_PATH}/${i?.backdrop_path}`}
                    alt={i.title}
                  />
                  <div className="flex flex-col justify-center">
                    <p> {i.title}</p>
                    <p>
                      {months[new Date(i.release_date).getMonth()]}{" "}
                      {new Date(i.release_date).getMonth()},{" "}
                      {new Date(i.release_date).getFullYear()}
                    </p>
                    <p>{i.overview.slice(0, 75)}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchList;
