import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../Layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../Custom-Input/CustomInput";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProductAction, updateNewProductAction } from "./ProductAction";
import { SelectCategory } from "../../category/SelectCategory";
import { getProducts } from "../../../helper/axios";

const EditProduct = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  console.log(_id);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const [imgs, setImgs] = useState([]);
  const [imgToDelete, setImgToDel] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const { products } = await getProducts(_id);
    //   products?._id && setForm(products);
    // })();

    getSelectedProduct();
  }, []);

  const getSelectedProduct = async () => {
    const { products } = await getProducts(_id);
    console.log(products);
    products?._id && setForm(products);
  };
  console.log(form);
  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung T.V.",
      required: true,
      value: form.name,
    },
    {
      name: "sku",
      label: "SKU",
      type: "text",
      placeholder: "SAM-TV-8",
      required: true,
      value: form.sku,
      disabled: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      value: form.slug,
      disabled: true,
    },
    {
      name: "qty",
      label: "QTY",
      type: "number",
      placeholder: "50",
      required: true,
      value: form.qty,
    },
    {
      name: "price",
      label: "PRICE",
      type: "number",
      placeholder: "1000",
      required: true,
      value: form.price,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "800",
      value: form.salesPrice,
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
      value: form?.salesStartDate?.slice(0, 10),
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
      value: form?.salesEndDate?.slice(0, 10),
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "product description ...",
      rows: "10",
      required: true,
      value: form.description,
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    console.log(name, checked);

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnImageAtached = (e) => {
    const { files } = e.target;
    console.log(files);
    setImgs(files);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to update this product?")) {
      return;
    }
    const formDt = new FormData();
    // set all from data in FormDate

    const { sku, slug, _v, createAt, updatedAt, ...rest } = form;
    for (let key in form) {
      formDt.append(key, form[key]);
    }
    console.log(formDt);

    // check if there is any new image is being added
    if (imgs?.length) {
      [...imgs].forEach((item) => {
        formDt.append("images", item);
      });
    }

    dispatch(updateNewProductAction(formDt));
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure you want to delete")) {
      const isDeleted = await dispatch(deleteProductAction(_id));
      isDeleted && navigate("/product");
    }
  };

  return (
    <AdminLayout title="Edit Product">
      <Link to="/product">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <div className="mt-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              onChange={handleOnChange}
              checked={form.status === "active"}
            />
          </Form.Group>

          <SelectCategory
            onChange={handleOnChange}
            name="parentCat"
            required={true}
            _id={form.parentCat}
          />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="py-5 d-flex">
            {form.images?.map((url) => (
              <div className="">
                <div className="">
                  <input
                    type="radio"
                    name="thumbnail"
                    checked={url === form.thumbnail}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="py-5 ">
            {form.images?.map((url) => (
              <img
                className="img-thumbnail"
                key={url}
                src={process.env.REACT_APP_ROOTSERVER + url?.slice(6)}
                alt=""
                width="150px"
              />
            ))}
          </div>

          <Form.Check label="Delete" />

          <Form.Group className="mb-3 mt-3">
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnImageAtached}
            />
          </Form.Group>
          <div className="d-grid mt-3 mb-3">
            <Button variant="success" type="submit">
              Update Product
            </Button>
          </div>
          <div className="d-grid mt-3 mb-3">
            <Button variant="danger" onClick={handleOnDelete}>
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
