import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { actionAddNewStudent } from "../redux/actions";
import {useNavigate} from "react-router-dom"
import { Button, Form } from "react-bootstrap";
import GetStateOptions from "../components/stateOptions";

const AddStudent = () => {
  const navigate = useNavigate()
  const nameRef = useRef();
  const birthdayRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const studentDispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      // dispatch(actionIncrement(value))
    } else {
      let newStudentInfo = {
        id: Date.now(),
        name: nameRef.current.value,
        birthday: birthdayRef.current.value,
        state: stateRef.current.value,
        city: cityRef.current.value,
        zip: zipRef.current.value,
      };
      studentDispatch(actionAddNewStudent(newStudentInfo))
      navigate("/")
    }
  };

  return (
    <div className="container">
      <p className="add-student-title">Add Student</p>
      <Form noValidate validated onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
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
          <Form.Select ref={stateRef} aria-label="Default select example">
            <GetStateOptions />
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ZIP</Form.Label>
          <Form.Control
            type="number"
            ref={zipRef}
            maxLength={8}
            placeholder="ZIP"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="btn-lg me-2">
            Save
          </Button>
          <Button onClick={()=>{navigate("/")}} className="btn-lg ms-2">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddStudent;
