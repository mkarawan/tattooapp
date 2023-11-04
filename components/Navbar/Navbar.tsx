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
          <Link to="/artists">
            <p>artyści</p>
          </Link>
          <Link to="/designs">
            <p>wzory</p>
          </Link>
          <p>o nas</p>
          <p>kontakt</p>
        </div>

        <div className="user">
          <img src="user.jpg" alt="user-avatar" />
          <p>nazwa użytkownika</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
