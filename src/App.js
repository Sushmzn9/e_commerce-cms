import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/admin-verification" element={<AdminVerification />} />

        {/* Private Components */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Products />} />
        <Route path="/payment-option" element={<PaymentOption />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/new-admin" element={<Signup />} />
        <Route path="/admin-user" element={<AdminUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
