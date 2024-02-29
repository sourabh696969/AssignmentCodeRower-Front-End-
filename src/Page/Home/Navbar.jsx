import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const history = useNavigate()
  const [progress, setProgress] = useState(0)
  let location = useLocation();
  useEffect(() => { }, [location]);
  const handleClick = () => {
    setProgress(progress + 25)
    setTimeout(() => {
      setProgress(progress + 100)
    }, 800);
  }

  const logout = () => {
    localStorage.removeItem("token")
    history('/')
  }

  const newLocal = "col-lg-12 py-3 mb-md-4 mb-2 shadow-sm d-flex justify-content-between";
  return (
    <>
      <LoadingBar
        color='#AD88C6'
        height={3}
        shadow={`0px 0px 10px #BFC2FF`}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={newLocal}>
        <div className="d-flex">
          <i className="bi bi-list fs-3 d-show d-md-none mx-1 my-0 py-0" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i><h4>{props.heading}</h4>
        </div>
        <div className="text-end">
          <div className="dropdown">
            <Link
              to="#"
              className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
                alt=""
                width={32}
                height={32}
                className="rounded-circle me-2 img-fit"
              />
              Sourabh
            </Link>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <div className="dropdown-item" onClick={logout}>
                  logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* /// */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabe" style={{ backgroundColor: "#AD88C6", width: "280px" }}>
        <div className="offcanvas-header border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center  mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <h5 className="text-white"> Sourabh</h5>
          </Link>
          <i className="bi bi-x-lg fs-4 text-white" data-bs-dismiss="offcanvas" aria-label="Close"></i>
        </div>
        <div className="offcanvas-body">
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
          <hr />
        </div>
      </div>
    </>
  );
}

export default Navbar;
