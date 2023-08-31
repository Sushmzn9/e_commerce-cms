import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

import {
  deletePayAction,
  updatePayAction,
} from "../pages/PaymentOption/PaymentAction";
import { useNavigate } from "react-router-dom";

export const EditPayForm = ({ pay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(pay);
  }, [dispatch, pay]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePayAction(form));
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you wnat to delete this category")) {
      dispatch(deletePayAction(pay._id));
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="border p-4 rounded shadow-lg">
      <label htmlFor="">Status</label>
      <Form.Select name="status" onChange={handleOnChange} required>
        <option value="">--Select One --</option>
        <option value="active" selected={form.status === "active"}>
          Active
        </option>
        <option value="inactive" selected={form.status === "inactive"}>
          Inactive
        </option>
      </Form.Select>
      <Form.Group className="mt-3">
        <Form.Check
          type="switch"
          name="status"
          title="Status"
          checked={form.status === "active"}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          placeholder="Card"
          name="title"
          value={form.title}
          onChange={handleOnChange}
        />
        <Form.Control
          placeholder="description"
          name="description"
          value={form.description}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="dark" type="submit">
          Update Payment
        </Button>
      </Form.Group>
      <Form.Group className="mt-3 d-grid">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete Payment
        </Button>
      </Form.Group>
    </Form>
  );
};
