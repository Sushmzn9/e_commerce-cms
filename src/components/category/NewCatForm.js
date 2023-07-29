import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postNewCatAction } from "../pages/Category/CategoryAction";

export const NewCatForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();

  const handleOnAddCat = () => {
    const { value } = nameRef.current;
    value && dispatch(postNewCatAction({ title: value }));
    console.log(value);

    // nameRef.current.value = "test";
  };
  return (
    <div className="border p-4 rounded shadow-lg">
      <Row>
        <Col>
          <Form.Control placeholder="First Name" ref={nameRef} />
        </Col>
        <Col className="d-grid">
          <Button variant="dark" onClick={handleOnAddCat}>
            Add New Category
          </Button>
        </Col>
      </Row>
    </div>
  );
};
