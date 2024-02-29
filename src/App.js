import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Sinup from "./Page/Sinin/Signin";
import PrivateRoute from "./PrivateRoute";
import SignUP from "./Page/Sinin/signup";
import AddConfigration from "./Page/Configration/Addconfiggration";
import Configration from "./Page/Configration/Configrations";
import UpdateConfigration from "./Page/Configration/Updateconfig";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Sinup />} />
          <Route path="/sign_up" element={<SignUP />} />
          <Route
            path="/Configration"
            element={<PrivateRoute Component={Configration} />}
          />
          <Route
            path="/AddConfigration"
            element={<PrivateRoute Component={AddConfigration} />}
          />
          <Route
            path="/updateconfig"
            element={<PrivateRoute Component={UpdateConfigration} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
