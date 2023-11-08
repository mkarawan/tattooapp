import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <>
      <div className="padding2">
        <div>
          <h1 className="title-text">Witaj</h1>
          <input
            className="login-input"
            placeholder="Nazwa użytkownika"
            type="text"
          />
          <input className="login-input" placeholder="Hasło" type="password" />
          <Link to="/">
            <button className="gradientBtn">Zaloguj</button>
          </Link>
        </div>
      </div>
      <Link to="/registration">
        <button className="gradientBtn new-account-btn">
          utwórz nowe konto
        </button>
      </Link>
    </>
  );
};

export default Login;
