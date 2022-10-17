import React, { memo } from "react";
import { Button } from "react-bootstrap";

const StudentTableRow = memo(
  ({ studentData, onShowEditModal, onShowDeleteModal }) => {
    const generateRowArray = () => {
      // generate the TR by student's data
      let tdArray = Object.values(studentData).map((value, index) => {
        return index === 0 ? null : (
          <div
            className="col-2 pt-2 text-center fs-5 border border-secondary"
            key={`${studentData.id}-${index}`}
          >
            {value}
          </div>
        );
      });

      tdArray.push(
        <div
          className="col-2 text-center border border-secondary"
          key={`action-${studentData.id}`}
        >
          <Button
            className="fs-5"
            variant="link"
            onClick={() => onShowEditModal(studentData)}
          >
            Edit
          </Button>
          |
          <Button
            className="fs-5"
            variant="link"
            onClick={() => onShowDeleteModal(studentData)}
          >
            Delete
          </Button>
        </div>
      );
      return tdArray;
    };

    return <div className="row">{generateRowArray()}</div>;
  }
);

export default StudentTableRow;
