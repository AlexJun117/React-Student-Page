import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import GetStateOptions from "../stateOptions";
// import { useDispatch, useSelector } from "react-redux";
// import {actionIncrement, actionDecrement} from "../../redux/actions"

function EditModal({ show, onSave, onHide, studentInfo }) {
  // const dispatch = useDispatch()
  // const value = useSelector((state)=>state.value)
  const [validated, setValidated] = useState(true);
  const nameRef = useRef();
  const birthdayRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      // dispatch(actionIncrement(value))
    } else {
      let updatedStudentInfo = {
        id:studentInfo.id, 
        name:nameRef.current.value,
        birthday:birthdayRef.current.value,
        state:stateRef.current.value,
        city:cityRef.current.value,
        zip:zipRef.current.value,
      }
      onSave(updatedStudentInfo)
    }
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
          Edit Student Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              defaultValue={studentInfo.name}
              placeholder="Name"
              autoFocus
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              ref={birthdayRef}
              defaultValue={studentInfo.birthday}
              placeholder="Birthday"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              ref={cityRef}
              defaultValue={studentInfo.city}
              placeholder="City"
              autoFocus
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              ref={stateRef}
              defaultValue={studentInfo.state}
              aria-label="Default select example"
            >
              <GetStateOptions />
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" defaultValue={studentInfo.zip}>
            <Form.Label>ZIP</Form.Label>
            <Form.Control
              type="number"
              ref={zipRef}
              maxLength={8}
              placeholder="ZIP"
              defaultValue={studentInfo.zip}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Save</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditModal;
