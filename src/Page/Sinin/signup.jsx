import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUPAPi } from "../../ReduxToolkit/Slice/SignIn";
import { Link, useNavigate } from 'react-router-dom';


function SignUP() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const status = useSelector((state) => state.signIn.status);
    // const message = useSelector((state) => state.signIn.message);

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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("");


    const submit = (e) => {
        e.preventDefault();
        try {
            dispatch(SignUPAPi({
                name: name,
                email: email,
                password: password,
            })).then((result) => {
                if (result.payload) {
                    history('/');
                    setEmail("");
                    setPassword("");
                    setname("");
                }
            });
        } catch (error) {
            alert(error + error)
        }

    };

    return (
        <div className="container-fluid" style={signinStyle}>
            <form action="" onSubmit={submit}>
                <div className="row">
                    <div style={{ backgroundColor: "#AD88C6" }} className="p-3 rounded">
                        <div className="text-center">
                            <i className="bi bi-person-circle text-white fs-4"></i>
                            <h4 className="text-white">Assignment</h4>
                            <p className="text-white">Welcome to Assignment</p>
                        </div>
                        <h3 className="text-white">Sign Up</h3>
                        <div className="d-grid my-2">
                            <label htmlFor="" className="text-white">Name</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>

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
                                </div> : "Create"
                            }</button>
                        </div>
                        <span className="text-light">i have already accrount ? <Link to={"/"} className="text-light"> login</Link></span>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUP;
