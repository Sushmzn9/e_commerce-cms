import React, { useState } from "react";
import { Header } from "../../Layout/Header";
import { Footer } from "../../Layout/Footer";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInAdminAction } from "./adminAction";

const initialState = {
  email: "",
  password: "",
};
export const Signin = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signInAdminAction(form);
  };

  return (
    <div>
      <Header />
      <main className="main pt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-3 shadow-lg"
          style={{ width: "450px", margin: "auto" }}
        >
          <h1 className="mb-5">
            Welcome Back
            <hr />
          </h1>

          <CustomInput
            label="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleOnChange}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleOnChange}
            required
          />

          <div className="d-grid mt-3">
            <Button variant="dark" type="submit">
              Sign In
            </Button>
          </div>
          <p className="mt-2 text-end">
            Forget password? <Link to="reset-pass-otp">reset </Link> now.
          </p>
        </Form>
      </main>
      <Footer />
    </div>
  );
};
