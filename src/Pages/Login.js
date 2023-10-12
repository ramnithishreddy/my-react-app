import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    Username: "",
    Password: "",
  });
  const [user, setUser] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userSignUp")) || [];
    setUser(store);
  }, []);

  const handleLogin = () => {
    const match = user.find(
      (lmatch) =>
        lmatch.Username === login.Username && lmatch.Password === login.Password
    );
    if (match && login.Username !== "" && login.Password !== "") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("login", JSON.stringify(login));
      setIsLogin(true);
      alert("Success");
      nav("/");
      window.location.reload();
    } else if (login.Username === "admin" && login.Password === "admin") {
      localStorage.removeItem("login");
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("login", JSON.stringify(login));
      setIsLogin(true);
      alert("Success");
      nav("/");
      window.location.reload();
    } else {
      localStorage.setItem("isLogin", "false");
      setIsLogin(false);
      alert("Unsuccessful");
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username </label>
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={login.Username}
          onChange={handleLoginChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={login.Password}
          onChange={handleLoginChange}
          required
        />
      </div>
      <div>
        New User? <a href="/SignUp">SignUp</a>
      </div>
      <button className="submit-button" type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
