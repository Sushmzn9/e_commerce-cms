import React, { useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getadminDisplayAction } from "./AdminDisplayAction";

const AdminTable = () => {
  const dispatch = useDispatch();
  const { admindisplay } = useSelector((state) => state.adminDisplayInfo);
  useEffect(() => {
    dispatch(getadminDisplayAction());
  }, [dispatch]);
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div>{admindisplay.length} admin found</div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>email</th>
            <th>Createdat</th>
          </tr>
        </thead>

        <tbody>
          {admindisplay?.map(
            ({ _id, status, fName, lName, phone, email, createdAt }, i) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>
                  <span
                    className={
                      status === "active"
                        ? "bg-success p-2 rounded"
                        : "bg-danger p-2 rounded"
                    }
                  >
                    {status}
                  </span>
                </td>
                <td> {fName}</td>
                <td>{lName}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{createdAt.slice(0, 10)}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default AdminTable;
