import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActingList from "../../components/ActingList";
import {
  fetchPersonCasts,
  fetchPersonDetail,
} from "../../redux/personDetail/services";
import { GiCircle } from "react-icons/gi";
import { GrFormSubtract } from "react-icons/gr";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PersonDetail() {
  const { movieCredits, personDetail, person, cast } = useSelector(
    (state) => state.person
  );
  console.log("movieCREDTİS", movieCredits);
  const { person_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (person.status === "idle") {
      dispatch(fetchPersonDetail(person_id));
    }
    if (cast.status === "idle") {
      dispatch(fetchPersonCasts(person_id));
    }
  }, [dispatch, person_id, person, cast]);
  if (person.error) {
    return <Error message={person.error} />;
  }
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-6 my-10 md:my-24">
          {person.status === "loading" && <Loading />}
          <div className="col-span-1 flex flex-col justify-center items-center xl:block">
            {personDetail?.profile_path ? (
              <img
                src={`${process.env.REACT_APP_BACKDROP_PATH}/${personDetail?.profile_path}`}
                alt=""
                className="h-[400px] min-w-[250px] object-cover"
              />
            ) : (
              <img
                REACT_APP_API_NOT_IMAGE
                className="h-[400px] min-w-[250px] object-cover"
                src={process.env.REACT_APP_API_NOT_IMAGE}
                alt=""
              />
            )}
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl mb-2">Personal Info</h2>
              <div>
                <h4 className="text-lg">Known For</h4>
                <span className="info-text">
                  {personDetail?.known_for_department}
                </span>
              </div>
              <div>
                <h4>Known Credits</h4>
                <span className="info-text">
                  {personDetail?.also_known_as?.length}
                </span>
              </div>
              <div>
                <h4>Gender</h4>
                <span className="info-text">{personDetail?.gender}</span>
              </div>
              <div>
                <h4 className="text-lg my-2">Birthday</h4>
                <span className="info-text">
                  {personDetail?.birthday}(
                  {new Date().getFullYear() -
                    new Date(personDetail?.birthday).getFullYear()}{" "}
                  years old)
                </span>
              </div>
              <div>
                <h4 className="text-lg my-2">Place of Birth</h4>
                <span className="info-text">
                  {personDetail?.place_of_birth}
                </span>
              </div>
              <div>
                <h4 className="text-lg my-2">Also Known As</h4>
                <ul>
                  {personDetail?.also_known_as?.map((item, index) => (
                    <li className="info-text leading-5" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="text-center">
              <h1>{personDetail?.name}</h1>
              <h2>Biography</h2>
            </div>
            <p className="">{personDetail?.biography}</p>
            <div className="my-4">
              <h2>Known For</h2>
              <ActingList
                casts={movieCredits?.cast}
                status={cast.status}
                error={cast.error}
              />
            </div>
            <div>
              <h2 className="text-2xl mx-2">Acting</h2>
              <table className="table-auto w-full">
                <tbody>
                  {movieCredits?.cast?.map((item, index) => (
                    <div key={index} className="my-4 mx-2">
                      <tr className="leading-6 flex gap-2">
                        <td className="flex items-center gap-x-5">
                          {item?.release_date ? (
                            <>
                              <span className="w-10">
                                {new Date(item?.release_date).getFullYear()}
                              </span>
                              <GiCircle />
                            </>
                          ) : (
                            <>
                              <span className="w-10">
                                <GrFormSubtract />
                              </span>
                              <GiCircle />
                            </>
                          )}
                        </td>
                        <td className="flex flex-col md:flex-row ">
                          {item?.original_title} as
                          <span className="text-gray-500 ml-2">
                            {item?.character}
                          </span>
                        </td>
                      </tr>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PersonDetail;
