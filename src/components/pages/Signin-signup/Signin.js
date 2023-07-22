import React from "react";
import { Header } from "../../Layout/Header";
import { Footer } from "../../Layout/Footer";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { Button, Form } from "react-bootstrap";

export const Signin = () => {
  const inputs = [
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
      placeholder: "*******",
      type: "password",
    },
  ];
  return (
    <div>
      <Header />
      <main className="main">
        <Form className="m-5 p-5 border shadow-lg rounded ">
          <div className="text-center fs-3 pb-5 ">Login Now</div>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid">
            <Button>Login Now</Button>
          </div>
        </Form>
      </main>

      <Footer />
    </div>
  );
};
