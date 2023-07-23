import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../Custom-Input/CustomInput";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { createNewAdminAction } from "../pages/Signin-signup/adminAction";

export const AdminSignup = () => {
  const [form, setForm] = useState({});
  // toast.success("test");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password is not match");
    }
    console.log(form);
    createNewAdminAction(rest);
  };
  const input = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "First Name",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Last Name",
      type: "text",
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "1234567890",
      type: "number",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "2/2 Waterloo, Sydney",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "abc@gmail.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
    {
      label: "Confirm Password",
      required: true,
      placeholder: "******",
      name: "confirmPassword",

      type: "password",
      minLength: "6",
    },
  ];
  return (
    <div>
      <Form
        className="p-3 m-5 border shadow-lg rounded-3 "
        onSubmit={handleOnSubmit}
      >
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
