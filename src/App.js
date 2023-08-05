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
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsAction());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/admin-verification" element={<AdminVerification />} />

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
