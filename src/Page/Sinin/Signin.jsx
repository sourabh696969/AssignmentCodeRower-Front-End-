import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignInAPi } from "../../ReduxToolkit/Slice/SignIn";
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const status = useSelector((state) => state.signIn.status);
  const loginError = useSelector((state) => state.signIn.error);

  const signinStyle = {
    position: "fixed",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const popup = {
    zIndex: 999,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    try {
      dispatch(SignInAPi({ email, password })).then((result) => {
        if (result.payload) {
          history("/Configration")
        }
      });
    } catch (error) {
      alert(error + error)
    }
  };

  return (
    <>
      {status === 'failed' && <div className="position-fixed text-center my-md-3 my-4" style={popup}>
        <div class="alert alert-danger" role="alert">

          {loginError == null ? "Admin not found! please try again leter" : loginError}

        </div>
      </div>}
      <div className="container-fluid" style={signinStyle}>
        <form action="" onSubmit={submit}>
          <div className="row">
            <div style={{ backgroundColor: "#AD88C6" }} className="p-3 rounded">
              <div className="text-center">
                <i className="bi bi-person-circle fs-4 text-white"></i>
                <h4 className="text-white">Assignment</h4>
                <p className="text-white">Welcome to Assignment</p>
              </div>
              <h3 className="text-white">Sign In</h3>
              <div className="d-grid my-2">
                <label htmlFor="" className="text-white">Email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid my-2">
                <label htmlFor="" className="text-white">Password</label>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Enter Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid my-3">
                <button className="btn btn-light" type="submit">{
                  status === "loading" && "succeeded" ? <div className="spinner-border spinner-border-sm disabled" style={{ color: "#AD88C6" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : "Login"
                }</button>
              </div>
              <span className="text-light">if you have don't account ? <Link to={"/sign_up"} className="text-light">Create</Link></span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
