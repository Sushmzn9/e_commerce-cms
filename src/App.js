import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from "./components/pages/Signin-signup/Signup";
import { Signin } from "./components/pages/Signin-signup/Signin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        {/* Private Components */}
        <Route path="/new-admin" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
