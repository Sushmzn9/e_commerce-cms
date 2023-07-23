import React from "react";
import { Link } from "react-router-dom";
import { AiFillDashboard, AiFillProfile } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BiLogoProductHunt } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { FaBorderStyle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { PiUsersFourFill } from "react-icons/pi";
export const Sidebar = () => {
  return (
    <div className="side-ba bg-dark text-light p-3">
      <p className="mt-3 text-center">Admin Pannel</p>

      <hr />
      <nav>
        <ul className="list-unstyled sid-nav">
          <li>
            <Link className="nav-link" to="/dashboard">
              <AiFillDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/category">
              <BiCategoryAlt />
              Category
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              <BiLogoProductHunt /> Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/payment-option">
              <MdPayments />
              Payment Option
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/order">
              <FaBorderStyle />
              Orders
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/customer">
              <PiUsersFourFill />
              Customer
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/admin-user">
              <GrUserAdmin /> Admin User
            </Link>
          </li>
          <hr />
          <li>
            <Link className="nav-link" to="/profile">
              <AiFillProfile /> Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
