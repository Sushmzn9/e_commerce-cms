import React, { useRef } from "react";
import { CustomInput } from "../Custom-Input/CustomInput";
import { Button, Form } from "react-bootstrap";

export const PasswordOTP = ({ handleOnOtpRequest }) => {
  const emailRef = useRef("");

  const handleOnOTPRequest = () => {
    const { value } = emailRef.current;
    if (value) {
      handleOnOtpRequest(value);
    }
  };

  return (
    <Form>
      <h3>Request OTP</h3>
      <hr />

      <CustomInput
        someRef={emailRef}
        label="email"
        placeholder="sam@email.com"
      />
      <div className="d-grid mt-3">
        <Button variant="dark" onClick={handleOnOTPRequest}>
          Request OTP
        </Button>
      </div>
    </Form>
  );
};
