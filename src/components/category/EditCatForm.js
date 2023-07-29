import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import {
  deleteCatAction,
  updateCatAction,
} from "../pages/Category/CategoryAction";

export const EditCatForm = ({ cat }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(cat);
  }, [dispatch, cat]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, title, status } = form;

    dispatch(updateCatAction({ _id, title, status }));
  };

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    console.log(name, value, checked);

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you wnat to delete this category")) {
      dispatch(deleteCatAction(cat._id));
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="border p-4 rounded shadow-lg">
      <Row>
        <Col md={1}>
          <Form.Check
            type="switch"
            name="status"
            title="Status"
            checked={form.status === "active"}
            onChange={handleOnChange}
          />
        </Col>
        <Col md={6}>
          <Form.Control
            placeholder="First name"
            name="title"
            value={form.title}
            onChange={handleOnChange}
          />
        </Col>
        <Col className="d-grid" md={4}>
          <Button variant="dark" type="submit">
            Update Category
          </Button>
          <Button variant="danger" onClick={handleOnDelete}>
            Delete Category
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
