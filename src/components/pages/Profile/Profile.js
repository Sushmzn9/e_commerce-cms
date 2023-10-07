import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { updateAdminProfileAction } from "./profileAction";
import { ChangePassword } from "./ChangePassword";

export const Profile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { admin } = useSelector((state) => state.adminInfo);
  const input = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "First Name",
      type: "text",
      value: form.fName || "",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Last Name",
      type: "text",
      value: form.lName || "",
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "1234567890",
      type: "number",
      value: form.phone || "",
    },
    {
      label: "Address",
      name: "address",
      placeholder: "2/2 Waterloo, Sydney",
      type: "text",
      value: form.address || "",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "abc@gmail.com",
      type: "email",
      value: form.email || "",
    },
    {
      label: "Please enter the password to update",
      name: "password",
      required: true,
      placeholder: "*****",
      type: "password",
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAdminProfileAction(form));
  };

  const handleOnUpdate = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    setForm(admin);
  }, [admin]);

  return (
    <AdminLayout title="Profile">
      <div className="profile-container">
        <Form onSubmit={handleOnSubmit} className="profile-form">
          {input.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnUpdate} />
          ))}
          <Button variant="dark" type="submit">
            Update Profile
          </Button>
        </Form>
        <div className="change-password-section">
          <ChangePassword />
        </div>
      </div>
    </AdminLayout>
  );
};
