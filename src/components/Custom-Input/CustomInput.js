import React from "react";
import { Form } from "react-bootstrap";
export const CustomInput = ({ label, someRef, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} ref={someRef} />
      </Form.Group>
    </div>
  );
};
