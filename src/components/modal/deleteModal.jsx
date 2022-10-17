import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { actionIncrement, actionDecrement } from "../../redux/actions";

function DeleteModal({ show, onDelete, onHide, studentInfo }) {
//   const dispatch = useDispatch();
//   const value = useSelector((state) => state.value);
//   const [validated, setValidated] = useState(true);

  const handleDelete = () => {
    onDelete(studentInfo);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Student Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         Do you delete <b>{studentInfo.name}</b> info?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
