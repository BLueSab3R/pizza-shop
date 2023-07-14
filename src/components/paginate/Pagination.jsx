import React from 'react'
import ReactPaginate from 'react-paginate';
import './_paginate.scss';

const Pagination = ({ currentPage, onPageChange, pageCount }) => {
    const handlePageClick = (selectedPage) => {
        onPageChange(selectedPage);
    }
    return (
        <div>
            <ReactPaginate
                className={'root'}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
                marginPagesDisplayed={0}
                activeClassName='activePagination'
                disabledClassName='disabledPagination'
            />
        </div>
    )
}

export default Pagination
