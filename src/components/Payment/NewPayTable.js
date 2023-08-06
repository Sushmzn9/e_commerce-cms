import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CustomInput } from "../Custom-Input/CustomInput";
import { postNewpayAction } from "../pages/PaymentOption/PaymentAction";

export const NewPayForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewpayAction(form));
    console.log(form);
  };
  return (
    <div className="border p-4 rounded shadow-lg">
      <Row>
        <Form onSubmit={handleOnSubmit}>
          <CustomInput
            label="Title"
            name="title"
            onChange={handleOnChange}
            required
          />
          <CustomInput
            label="Description"
            as="textarea"
            name="description"
            onChange={handleOnChange}
            required
          />
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Add New Payment
            </Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};
