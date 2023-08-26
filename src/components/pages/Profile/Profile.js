import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { CustomModal } from "../../CustomModel/CustomModel";
import { Button } from "react-bootstrap";
import { setModalShow } from "../../../System/systemSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const { admin } = useSelector((state) => state.adminInfo);
  const [modal, setModal] = useState("");
  const input = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "First Name",
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Last Name",
      type: "text",
      value: form.lName,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "1234567890",
      type: "number",
      value: form.phone,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "2/2 Waterloo, Sydney",
      type: "text",
      value: form.address,
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "abc@gmail.com",
      type: "email",
      value: form.email,
    },
  ];
  const handleOnEdit = () => {
    setModal();
    dispatch(setModalShow(true));
    setModal("edit");
  };
  const handleOnChange = () => {
    setModal("change");
    dispatch(setModalShow(true));
  };
  useEffect(() => {
    setForm(admin);
  }, []);
  return (
    <div>
      <AdminLayout title="Profile">
        {input.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}
        <Button onClick={handleOnEdit}>update</Button>
        <br />
        <br />
        <Button onClick={handleOnChange}>Change Password</Button>
        {modal === "edit" && (
          <CustomModal title="Enter your password to update">
            <form className="formP">
              <label for="password">Password</label>
              <br />
              <input className="" type="password" />
              <br />
              <Button variant="success">Submit</Button>
            </form>
          </CustomModal>
        )}
        {modal === "change" && (
          <CustomModal title="Enter your password to Change">
            <form className="formP">
              <input className="" type="password" placeholder="Old Password" />
              <input className="" type="password" placeholder="New Password" />
              <input
                className=""
                type="password"
                placeholder="Confirm Password"
              />

              <Button variant="success">Submit</Button>
            </form>
          </CustomModal>
        )}
      </AdminLayout>
    </div>
  );
};
