import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { months } from '../../common/Months';
import { fetchSearch } from "../../redux/search/services";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";

function SearchList() {
  const { search } = useSelector(
    (state) => state.search
  );

  const { query } = useParams();
  const dispatch = useDispatch();

  let movie = search?.data[0]?.filter(i => i?.media_type === "movie").length;
  let tv = search?.data[0]?.filter(i => i?.media_type === "tv").length;
  let person = search?.data[0]?.filter(i => i?.media_type === "person").length;

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [dispatch, query]);
  
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
        <div className="col-auto md:col-span-4 py-4">
          {search.data[0]?.map((i) => (
            <a key={i?.id} href={`/${i?.media_type}/${i?.id}`}>
              <div className="flex flex-col items-center md:flex-row my-4 drop-shadow-xl shadow-xl rounded-xl">
                {i?.media_type === "person" ? <img
                  className="w-40 h-50 mr-5 object-cover rounded-xl"
                  src={`${i?.profile_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.profile_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.name}
                /> : i.media_type === "movie" ? <img
                  className="w-40 h-50 mr-5 object-cover rounded-xl"
                  src={`${i?.backdrop_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.backdrop_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.title}
                /> : <img
                  className="w-40 h-50 mr-5 object-cover rounded-xl"
                  src={`${i?.backdrop_path ? process.env.REACT_APP_BACKDROP_PATH + '/' + i?.backdrop_path : process.env.REACT_APP_API_NOT_IMAGE}`}
                  alt={i?.title}
                />
                }
                <div className="flex flex-col text-sm md:text-md p-4 justify-center">
                  <div>
                    <p className="font-medium text-lg"> {i?.media_type === "person" ? i?.name : i?.media_type === "movie" ? i?.title : i?.media_type === "tv" ? i?.name : 'Not Found'}</p>
                    {i?.media_type === "person" ?
                      i?.known_for_department : i?.media_type === "movie" ?
                        <p><span className="mr-1">{months[new Date(i.release_date).getMonth()]}</span>
                          <span className="mr-1">{new Date(i.release_date).getDate()},</span>
                          {new Date(i?.release_date).getFullYear()}</p> : i?.media_type === "tv" ?
                          <p><span className="mr-1">{months[new Date(i.first_air_date).getMonth()]}</span>
                            <span className="mr-1">{new Date(i.first_air_date).getDate()},</span>
                            {new Date(i?.first_air_date).getFullYear()}</p> : ''}
                  </div>
                  <div>
                    {i?.media_type === "person" ? <p className="text-md">{i?.known_for?.map(a => <span key={a?.id}>{a?.title}</span>)}</p> : i?.media_type === "movie" ? <p className="text-md">{i?.overview}</p> : i?.media_type === "tv" ? <p className="text-md">{i?.overview}</p> : ''}
                  </div>
                </div>
              </div>
            </a>
          ))}
          <Pagination searchName={query} total={search?.total_pages} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchList;
