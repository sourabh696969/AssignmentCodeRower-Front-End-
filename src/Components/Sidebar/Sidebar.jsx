import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

function Sidebar() {
  const [progress, setProgress] = useState(0)
  let location = useLocation();
  useEffect(() => { }, [location]);
  const handleClick = () => {
    setProgress(progress + 25)
    setTimeout(() => {
      setProgress(progress + 100)
    }, 800);
  }

  return (
    <>
      <LoadingBar
        color='#AD88C6'
        height={3}
        shadow={`0px 0px 10px #BFC2FF`}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        className="col-lg-2 d-flex flex-column flex-shrink-0 vh-100 d-none d-md-block"
        style={{ backgroundColor: "#AD88C6", overflowY: "scroll" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center  mb-md-0 me-md-auto link-dark text-decoration-none m-2"
        >
          <h5 className="text-white"> Sourabh</h5>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            onClick={handleClick}
            className={location.pathname === "/Configration" ? "li-style my-1" : "my-1"}
          >
            <Link to="/Configration" className="nav-link">
              <i className="bi bi-people-fill mx-1" />
              configgration
            </Link>
          </li>
          <li
            onClick={handleClick}
            className={location.pathname === "/AddConfigration" ? "li-style my-1" : "my-1"}
          >
            <Link to="/AddConfigration" className="nav-link">
              <i className="bi bi-plus-circle mx-1" />
              Add Configration
            </Link>
          </li>
          <li
            onClick={handleClick}
            className={location.pathname === "/updateconfig" ? "li-style my-1" : "my-1"}
          >
            <Link to="/updateconfig" className="nav-link">
              <i className="bi bi-pencil mx-1" />
              update Config
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;