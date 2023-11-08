import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar: React.FC<{ hideNavbar: () => void }> = ({ hideNavbar }) => {
  return (
    <>
      <span onClick={hideNavbar}></span>
      <div className="navbar">
        <div>
          <IconContext.Provider
            value={{ size: "35px", color: "var(--background-color)" }}
          >
            <div onClick={hideNavbar}>
              <ImCross />
            </div>
          </IconContext.Provider>
          <div className="links">
            <Link to="/artists">
              <p className="uppercase" onClick={hideNavbar}>
                artyści
              </p>
            </Link>
            <Link to="/designs">
              <p className="uppercase" onClick={hideNavbar}>
                wzory
              </p>
            </Link>
            <p className="uppercase">o nas</p>
            <p className="uppercase">kontakt</p>
          </div>
        </div>

        <div className="user" onClick={hideNavbar}>
          <Link to="/account">
            <img src="user.jpg" alt="user-avatar" />
            <p className="uppercase">nazwa użytkownika</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
