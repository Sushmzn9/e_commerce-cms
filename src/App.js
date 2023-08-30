import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Signup } from "./components/pages/Signin-signup/Signup";
import { Signin } from "./components/pages/Signin-signup/Signin";
import { AdminVerification } from "./components/pages/Signin-signup/AdminVerification";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { Category } from "./components/pages/Category/Category";
import { Products } from "./components/pages/Products/Product";
import { PaymentOption } from "./components/pages/PaymentOption/PaymentOption";
import { Orders } from "./components/pages/Orders/Orders";
import { Customer } from "./components/pages/Customer/Customer";
import { AdminUser } from "./components/pages/AdminUser/AdminUser";
import { Profile } from "./components/pages/Profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatsAction } from "./components/pages/Category/CategoryAction";
import { PrivateRoute } from "./components/Private/privateRoute";
import { NewProduct } from "./components/pages/NewProduct/NewProduct";
import EditProduct from "./components/pages/NewProduct/EditProduct";
import { ResetPassword } from "./components/pages/Signin-signup/ResetPassword";
import { getProductsAction } from "./components/pages/NewProduct/ProductAction";
import { getPayAction } from "./components/pages/PaymentOption/PaymentAction";
import { getadminDisplayAction } from "./components/pages/AdminUser/AdminDisplayAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsAction());
    dispatch(getProductsAction());
    dispatch(getPayAction());
    dispatch(getadminDisplayAction());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/admin-verification" element={<AdminVerification />} />
        <Route path="password-reset" element={<ResetPassword />} />

        {/* Private Components */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:_id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-product"
          element={
            <PrivateRoute>
              <NewProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment-option"
          element={
            <PrivateRoute>
              <PaymentOption />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <PrivateRoute>
              <Customer />
            </PrivateRoute>
          }
        />
        <Route path="/new-admin" element={<Signup />} />
        <Route
          path="/admin-user"
          element={
            <PrivateRoute>
              <AdminUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
