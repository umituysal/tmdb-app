import { useParams } from "react-router-dom";
import { GiCircle } from "react-icons/gi";
import { GrFormSubtract } from "react-icons/gr";

import Loading from "../../common/Loading";
import Error from "../../common/Error";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ActingList from "../../components/ActingList";

import useDetail from "../../hooks/useDetail";

function PersonDetail() {

  const { person_id } = useParams();
  const { person } = useDetail({ id: person_id, name: 'person' })

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
              <h2 className="text-2xl mb-2">Personal Info</h2>
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
                <h4 className="text-lg my-2">Birthday</h4>
                <span className="info-text">
                  {person?.data?.birthday}(
                  {new Date().getFullYear() -
                    new Date(person?.data?.birthday).getFullYear()}{" "}
                  years old)
                </span>
              </div>
              <div>
                <h4 className="text-lg my-2">Place of Birth</h4>
                <span className="info-text">
                  {person?.data?.place_of_birth}
                </span>
              </div>
              <div>
                <h4 className="text-lg my-2">Also Known As</h4>
                <ul>
                  {person?.data?.also_known_as?.map((item, index) => (
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
              <h1>{person?.data?.name}</h1>
              <h2>Biography</h2>
            </div>
            <p className="">{person?.data?.biography}</p>
            <div className="my-4">
              <h2>Known For</h2>
              <ActingList
                casts={person?.credits?.cast[0]}
                status={person?.credits?.status}
                error={person?.credits?.error}
              />
            </div>
            <div>
              <h2 className="text-2xl mx-2">Acting</h2>
              <table className="table-auto w-full">
                <tbody>
                  {person?.credits?.cast[0]?.map((item) => (
                    <div key={item?.id} className="my-4 mx-2">
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
