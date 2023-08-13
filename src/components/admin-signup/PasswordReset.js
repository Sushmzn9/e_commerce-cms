import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../Custom-Input/CustomInput";

export const PasswordReset = ({ setForm }) => {
  return (
    <Form>
      <h3>Reset New Password</h3>
      <hr />

      <CustomInput label="OTP" placeholder="12345" />
      <CustomInput label="Password" placeholder="****" />
      <CustomInput label="confirmPassword" placeholder="****" />
      <div className="d-grid mt-3">
        <Button variant="dark">Request OTP</Button>
      </div>

      <div className="text-end py-3">
        Didn't receive OTP{" "}
        <a onClick={() => setForm("otp")} href="#!">
          Request again.
        </a>
      </div>
    </Form>
  );
};
