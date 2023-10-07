import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../helper/axios";
import { setAdmin } from "../pages/Signin-signup/adminSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminInfo);

  const handleOnLogout = () => {
    // log out from server by removing the access and refresh JWTs

    logoutAdmin(admin._id);

    //clear storages
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");

    // reset store
    dispatch(setAdmin({}));
    navigate("/");
  };

  return (
    <Navbar expand="md" variant="dark" className="bg-dark" fluid={true}>
      <Container>
        <Link to="/" className="navbar-brand">
          Tech-Store
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {admin?._id ? (
              <>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="#!" className="nav-link" onClick={handleOnLogout}>
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to="/" className="nav-link">
                Sign In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
