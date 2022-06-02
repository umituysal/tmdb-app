import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { fetchMoviesSearchPage } from "../redux/movies/moviesSlice";
function Pagination({ total, searchName }) {
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const pageItem = event.selected + 1;
    const data = { search: searchName, pageItem };
    dispatch(fetchMoviesSearchPage(data));
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        nextLabel=">"
        containerClassName="pagination"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={Number(total)}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pagination;
