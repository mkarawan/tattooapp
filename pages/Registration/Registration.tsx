import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration: React.FC = () => {
  return (
    <>
      <div className="padding2 registration">
        <div>
          <h1 className="title-text">Rejestracja</h1>
          <input
            className="login-input"
            placeholder="Nazwa użytkownika"
            type="text"
          />
          <input
            className="login-input"
            placeholder="Adres e-mail"
            type="email"
          />
          <input className="login-input" placeholder="Hasło" type="password" />
          <input
            className="login-input"
            placeholder="Powtórz hasło"
            type="password"
          />
          <Link to="/login">
            <button className="gradientBtn">Zarejestruj się</button>
          </Link>
        </div>
      </div>
      <Link to="/login">
        <button className="gradientBtn new-account-btn">Zaloguj się</button>{" "}
      </Link>
    </>
  );
};

export default Registration;
