import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomModal } from "../../CustomModel/CustomModel";
import { setModalShow } from "../../../System/systemSlice";
import { useDispatch } from "react-redux";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { toast } from "react-toastify";
import { updateAdminPasswordAction } from "./profileAction";

export const ChangePassword = () => {
  const [modal, setModal] = useState("");
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnShow = () => {
    setModal("change");
    dispatch(setModalShow(true));
  };
  const inputs = [
    {
      label: "Old Password",
      type: "password",
      placeholder: "Old Password",
      name: "password",
    },
    {
      label: "New Password",
      type: "password",
      placeholder: "New Password",
      name: "newPassword",
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
    },
  ];
  const handleonChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.newPassword) {
      return toast.error("Password is not match");
    }
    dispatch(updateAdminPasswordAction(rest));

    console.log(form);
  };
  return (
    <div>
      <Button onClick={handleOnShow}>Change Password</Button>
      {modal === "change" && (
        <CustomModal title="Enter your password to Change">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleonChange} />
            ))}
            <Button type="submit" variant="success">
              Submit
            </Button>
          </Form>
        </CustomModal>
      )}
    </div>
  );
};
