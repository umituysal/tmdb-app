import { useParams } from "react-router-dom";
import { GiCircle } from "react-icons/gi";
import { GrFormSubtract } from "react-icons/gr";

import LoadingPage from "../../common/LoadingPage";
import Error from "../../common/Error";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ActingList from "../../components/ActingList";

import useDetail from "../../hooks/useDetail";

function PersonDetail() {
  const { person_id } = useParams();
  const { person } = useDetail({ id: person_id, name: "person" });

  if (person?.error) {
    return <Error message={person?.error} />;
  }

  return (
    <>
      {person?.status === "loading" ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <section>
            <div className="container grid grid-cols-1 gap-6 mx-auto my-10 xl:grid-cols-4 md:my-24">
              <div className="flex flex-col items-center justify-center col-span-1 xl:block">
                {person?.data?.profile_path ? (
                  <img
                    src={`${process.env.REACT_APP_BACKDROP_PATH}${person?.data?.profile_path}`}
                    alt=""
                    className="h-[400px] min-w-[250px] object-cover"
                  />
                ) : (
                  <img
                    className="h-[400px] min-w-[250px] object-cover"
                    src={process.env.REACT_APP_API_NOT_IMAGE}
                    alt=""
                  />
                )}
                <div className="flex flex-col mt-4">
                  <h2 className="mb-2 text-2xl">Personal Info</h2>
                  <div>
                    <h4 className="text-lg">Known For</h4>
                    <span className="info-text">
                      {person?.data?.known_for_department}
                    </span>
                  </div>
                  <div>
                    <h4>Known Credits</h4>
                    <span className="info-text">
                      {person?.data?.also_known_as?.length}
                    </span>
                  </div>
                  <div>
                    <h4>Gender</h4>
                    <span className="info-text">{person?.data?.gender}</span>
                  </div>
                  <div>
                    <h4 className="my-2 text-lg">Birthday</h4>
                    <span className="info-text">
                      {person?.data?.birthday}(
                      {new Date().getFullYear() -
                        new Date(person?.data?.birthday).getFullYear()}{" "}
                      years old)
                    </span>
                  </div>
                  <div>
                    <h4 className="my-2 text-lg">Place of Birth</h4>
                    <span className="info-text">
                      {person?.data?.place_of_birth}
                    </span>
                  </div>
                  <div>
                    <h4 className="my-2 text-lg">Also Known As</h4>
                    <ul>
                      {person?.data?.also_known_as?.map((item, index) => (
                        <li className="leading-5 info-text" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="text-center">
                  <h1 className="text-lg font-bold">{person?.data?.name}</h1>
                  <h2 className="font-bold text-md">Biography</h2>
                </div>
                <p className="px-2 text-center md:text-left">
                  {person?.data?.biography}
                </p>
                <div className="my-4">
                  <h2 className="px-2 mb-2 font-bold text-center text-md md:text-left">
                    Known For
                  </h2>
                  <ActingList
                    casts={person?.credits?.cast[0]}
                    status={person?.credits?.status}
                    error={person?.credits?.error}
                  />
                </div>
                <div className="px-2">
                  <h2 className="mx-2 text-2xl text-center md:text-left">
                    Acting
                  </h2>
                  <table className="w-full table-auto">
                    <tbody>
                      {person?.credits?.cast[0]?.map((item) => (
                        <div key={item?.id} className="mx-2 my-4">
                          <tr className="flex gap-2 leading-6">
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
                              <span className="ml-2 text-gray-500">
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
      )}
    </>
  );
}

export default PersonDetail;
