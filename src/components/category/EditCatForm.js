import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
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
      <Form.Group className="mt-3">
        {" "}
        <Form.Check
          type="switch"
          name="status"
          title="Status"
          checked={form.status === "active"}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        {" "}
        <Form.Control
          placeholder="First name"
          name="title"
          value={form.title}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="dark" type="submit">
          Update Category
        </Button>
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete Category
        </Button>
      </Form.Group>
    </Form>
  );
};
