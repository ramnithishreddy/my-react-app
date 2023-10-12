import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./assets/css/style.css";
import "./assets/img/favicon.png";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

export default function Navbar() {
  const [userSignUp, setUserSignUp] = useState([]);
  const [login, setLogin] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    const store1 = JSON.parse(localStorage.getItem("login")) || {};

    setUserSignUp(store);
    setLogin(store1);

    const store2 = localStorage.getItem("isLogin");
    setIsLogin(store2 === "true");
  }, []);

  const match = userSignUp.find(
    (user) =>
      user.Username === login.Username && user.Password === login.Password
  );

  const match1 = login.Username === "admin" && login.Password === "admin";
  // let d = []
  // d = new Date()
  // const d = new Date();
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <a href="/">
              <span>Todoist</span>
            </a>
          </h1>
          <a href="/">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <div className="position">
            <ul>
              <Link className="nav-link scrollto active" to="/">
                <HomeIcon fontSize="large" color="primary" />
              </Link>
              {isLogin ? (
                <>
                  <li>
                    <Link className="nav-link scrollto" to="TODO">
                      TODO
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="Contact">
                      Contact
                    </Link>
                  </li>
                </>
              ) : null}
              {isLogin && match1 ? (
                <div>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Admin List"
                      menuVariant="white"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/ContactList">
                        Contact List
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
              ) : null}
              {!isLogin ? (
                <>
                  <li>
                    <Link className="nav-link scrollto" to="Login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link scrollto" to="Signup">
                      SignUp
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          <div className="profile">
            {isLogin && (match || match1) ? (
              <ul className="navdropdown">
                <li className="dropdown">
                  <p>
                    {" "}
                    Hi,{" "}
                    <a href="/Profile" className="dropbtn">
                      {match ? match.Name : "Admin"}
                    </a>
                  </p>
                  <div className="dropdown-content">
                    <a href="/Logout" className="list1">
                      Logout
                    </a>
                    <a href="/Settings" className="list2">
                      Settings
                    </a>
                  </div>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
