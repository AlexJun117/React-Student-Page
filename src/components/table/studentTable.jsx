import React, { useState, memo } from "react";
import StudentTableRow from "./studentTableRow";
import TablePagination from "./tablePagination";

const StudentTable = memo(({ tableHeaderNames, studentDataArray, onShowEditModal, onShowDeleteModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const countPerPage = 5

  const onPageUpdateHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getTableHeaders = ()=>{
    tableHeaderNames.map((title, index) => {
      // generate the table header titles dinamically base on array
      return (
        <div
          className="col-2 fs-5 py-1 text-center text-white fw-bold bg-primary border border-secondary"
          key={`th-${index}`}
        >
          {title}
        </div>
      );
    })
  }

  const getStudentDataRows = ()=>{
    let startIndex = (currentPage-1)*countPerPage;
    let endIndex = startIndex+5
    let subStudentArray = studentDataArray.slice(startIndex, endIndex)
    return subStudentArray.map((studentData) => {
      return (
        <StudentTableRow
          key={`tr-${studentData.id}`}
          studentData={studentData}
          onShowEditModal={onShowEditModal}
          onShowDeleteModal={onShowDeleteModal}
        />
      );
    })
  }

  return (
    <div className="container">
      <div className="row">
        {getTableHeaders()}
      </div>
      {getStudentDataRows()}
      <TablePagination studentCount={studentDataArray.length} onPageUpdateHandler={onPageUpdateHandler} />
    </div>
  );
})

export default StudentTable;
