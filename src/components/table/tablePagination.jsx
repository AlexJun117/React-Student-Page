// @flow
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const TablePagination = ({ studentCount, onPageUpdateHandler }) => {
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setPageCount(Math.ceil(studentCount / 5));
  }, [studentCount]);

  const onClickPage = (pageNumber) => {
    setActivePage(pageNumber)
    onPageUpdateHandler(pageNumber)
  };

  return (
    <div className="d-flex justify-content-center mt-1">
      <Pagination>
        {pageCount > 3 ? <Pagination.First onClick={()=>onClickPage(1)}/> : null}
        {/* <Pagination.Prev /> */}
        {pageCount === activePage && activePage - 2 >= 1 ? (
          <Pagination.Item onClick={() => onClickPage(activePage - 2)}>
            {activePage - 2}
          </Pagination.Item>
        ) : null}
        {activePage - 1 >= 1 ? (
          <Pagination.Item onClick={() => onClickPage(activePage - 1)}>
            {activePage - 1}
          </Pagination.Item>
        ) : null}
        <Pagination.Item active onClick={() => onClickPage(activePage)}>
          {activePage}
        </Pagination.Item>
        {activePage + 1 <= pageCount ? (
          <Pagination.Item onClick={() => onClickPage(activePage + 1)}>
            {activePage + 1}
          </Pagination.Item>
        ) : null}
        {activePage === 1 && activePage + 2 <= pageCount ? (
          <Pagination.Item onClick={() => onClickPage(activePage + 2)}>
            {activePage + 2}
          </Pagination.Item>
        ) : null}
        {/* <Pagination.Next /> */}
        {pageCount > 3 ? <Pagination.Last onClick={()=>onClickPage(pageCount)}/> : null}
      </Pagination>
    </div>
  );
};

export default TablePagination;
