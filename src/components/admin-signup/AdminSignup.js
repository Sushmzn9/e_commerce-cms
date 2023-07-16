import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../Custom-Input/CustomInput";
import { Button } from "react-bootstrap";
export const AdminSignup = () => {
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
    console.log(form);
  };
  const input = [
    {
      label: "First Name",
      name: " fName",
      required: true,
      placeholder: "First Name",
      type: "text",
    },
    {
      label: "Last Name",
      name: " lName",
      required: true,
      placeholder: "Last Name",
      type: "text",
    },
    {
      label: "Phone",
      name: " phone",
      placeholder: "1234567890",
      type: "number",
    },
    {
      label: "Address",
      name: " address",
      placeholder: "2/2 Waterloo, Sydney",
      type: "text",
    },
    {
      label: "Email",
      name: " email",
      required: true,
      placeholder: "abc@gmail.com",
      type: "email",
    },
    {
      label: "Password",
      name: " password",
      required: true,
      placeholder: "******",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: " confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];
  return (
    <div>
      <Form
        className="m-5 p-5 border shadow-lg rounded-5 "
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3 fs-4 text-center text-bold text-uppercase ">
          Registration Form
        </div>
        {input.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
        <div className="d-grid">
          <Button type="submit">Create New Account</Button>
        </div>
      </Form>
    </div>
  );
};
