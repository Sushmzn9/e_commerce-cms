import React, { useState } from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postNewProductAction } from "./ProductAction";
import { SelectCategory } from "../../category/SelectCategory";

export const NewProduct = () => {
  const dispatch = useDispatch();
  const initialState = {
    status: "inactive",
  };
  const [form, setForm] = useState(initialState);
  const [imgs, setImgs] = useState([]);

  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung TV",
      required: true,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "SamT-v",
      required: true,
    },
    {
      name: "qty",
      label: "QTY",
      type: "number",
      placeholder: "22",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "1000",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "100",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "product description ....",
      rows: "8",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnImgAttached = (e) => {
    const { files } = e.target;
    setImgs(files);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formDt = new FormData();
    // set all from data in FormDate

    for (let key in form) {
      formDt.append(key, form[key]);
    }
    console.log(formDt);

    // check if there is any new image is being added
    if (imgs.length) {
      [...imgs].forEach((item) => {
        formDt.append("images", item);
      });
    }
    dispatch(postNewProductAction(formDt));
    console.log(form);
  };
  return (
    <AdminLayout title="New Product">
      <Link to="/product">
        <Button variant="secondary"> back</Button>
      </Link>
      <div className="">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              label="status"
              type="switch"
              onChange={handleOnChange}
            />
          </Form.Group>
          <SelectCategory
            onChange={handleOnChange}
            name="parentCat"
            required={true}
          />
          {inputs.map((item, i) => (
            <CustomInput {...item} key={i} onChange={handleOnChange} />
          ))}
          <Form.Group className="mb-3 mt-3">
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnImgAttached}
              required={true}
            />
          </Form.Group>
          <div className="d-grid mt-3 mb-3">
            <Button variant="success" type="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
