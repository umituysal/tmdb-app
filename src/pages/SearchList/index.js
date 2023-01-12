import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { months } from "../../common/Months";

import { fetchSearch } from "../../redux/search/services";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

function SearchList() {
  const { search } = useSelector((state) => state.search);

  const { query } = useParams();
  const dispatch = useDispatch();

  let movie = search?.data[0]?.filter((i) => i?.media_type === "movie").length;
  let tv = search?.data[0]?.filter((i) => i?.media_type === "tv").length;
  let person = search?.data[0]?.filter(
    (i) => i?.media_type === "person"
  ).length;

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [dispatch, query]);

  return (
    <>
      <Header />
      <div className="container w-full px-4 mx-auto my-4 md:grid md:grid-cols-6">
        <div className="hidden mx-10 bg-white rounded-md md:col-span-2 md:block drop-shadow-xl h-min">
          <div className="p-4 text-white rounded-md text-md bg-dark-blue">
            {" "}
            Arama Sonuçları
          </div>
          <ul className="flex flex-col my-2 leading-8 capitalize">
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>filmler</div>
              <div>({movie})</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>diziler</div>
              <div>({tv})</div>
            </li>
            <li className="flex justify-between px-4 py-2 rounded-lg hover:bg-dark-blue hover:text-white">
              <div>kişiler</div>
              <div>({person})</div>
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
        <div className="py-4 md:col-span-4">
          {search.data[0]?.map((i) =>
            i?.media_type === "person" && i?.profile_path ? (
              <a key={i?.id} href={`/${i?.media_type}/${i?.id}`}>
                <div className="flex flex-col items-center my-4 shadow-xl md:flex-row rounded-xl">
                  <img
                    className="object-cover w-40 mr-5 h-50 rounded-xl"
                    src={
                      process.env.REACT_APP_BACKDROP_PATH +
                      "/" +
                      i?.profile_path
                    }
                    alt={i?.name}
                  />
                  <div className="flex flex-col justify-center p-4 text-sm md:text-md">
                    <div>
                      <p className="text-lg font-medium"> {i?.name}</p>
                      {i?.known_for_department}
                    </div>
                    <div>
                      {
                        <p className="text-md">
                          {i?.known_for?.map((a) => (
                            <span key={a?.id}>{a?.title}</span>
                          ))}
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </a>
            ) : i?.media_type === "movie" && i?.poster_path ? (
              <a key={i?.id} href={`/${i?.media_type}/${i?.id}`}>
                <div className="flex flex-col items-center my-4 shadow-xl md:flex-row rounded-xl">
                  <img
                    className="object-cover w-40 mr-5 h-50 rounded-xl"
                    src={
                      process.env.REACT_APP_BACKDROP_PATH + "/" + i?.poster_path
                    }
                    alt={i?.title}
                  />
                  <div className="flex flex-col justify-center p-4 text-sm md:text-md">
                    <div>
                      <p className="text-lg font-medium"> {i?.name}</p>
                      {i?.known_for_department}
                    </div>
                    <div>
                      <p className="text-sm">{i?.title}</p>
                      <p className="text-xs">
                        <span className="mr-1">
                          {months[new Date(i.release_date).getMonth()]}
                        </span>
                        <span className="mr-1">
                          {new Date(i.release_date).getDate()},
                        </span>
                        {new Date(i?.release_date).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ) : i?.media_type === "tv" && i?.poster_path ? (
              <a key={i?.id} href={`/${i?.media_type}/${i?.id}`}>
                <div className="flex flex-col items-center my-4 shadow-xl md:flex-row rounded-xl">
                  <img
                    className="object-cover w-40 mr-5 h-50 rounded-xl"
                    src={
                      process.env.REACT_APP_BACKDROP_PATH + "/" + i?.poster_path
                    }
                    alt={i?.name}
                  />
                  <div className="flex flex-col justify-center p-4 text-sm md:text-md">
                    <div>
                      <p className="text-lg font-medium"> {i?.name}</p>
                    </div>
                    <div>
                      <p className="text-xs">
                        <span className="mr-1">
                          {months[new Date(i.first_air_date).getMonth()]}
                        </span>
                        <span className="mr-1">
                          {new Date(i.first_air_date).getDate()},
                        </span>
                        {new Date(i?.first_air_date).getFullYear()}
                      </p>
                      <p className="mt-2 text-sm">{i?.overview}</p>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )
          )}
          <Pagination
            name="search_page"
            searchName={query}
            total={search?.total_pages}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchList;
